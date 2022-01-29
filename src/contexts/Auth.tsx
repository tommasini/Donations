import React, {createContext, useContext, useEffect, useState} from 'react';
import useStorage from '../hooks/useStorage';

export type UserType = {
  id: string;
  email: string;
  walletId: string;
  wallet: number;
  moneyDonated: number;
};

type ContextProps = {
  user?: UserType;
  login: (user: UserType) => void;
  logout: () => void;
};

const AuthContext = createContext<ContextProps>({
  user: undefined,
  login: () => undefined,
  logout: () => undefined,
});

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<UserType>();

  const {setStorage: setStorageUser, removeStorage: removeStorageUser} =
    useStorage<any>('@donations:user', setUser);

  useEffect(() => {
    if (user) {
      setStorageUser(user);
    }
  }, [setStorageUser, user]);

  const login = (userArg: UserType) => {
    setUser(userArg);
  };

  const logout = () => {
    setUser(undefined);
    removeStorageUser();
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
