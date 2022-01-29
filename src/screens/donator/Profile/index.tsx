import React from 'react';
import Profile from '../../../components/templates/donator/Profile';
import Wallet from '../../../components/molecules/Wallet';
import RoundButton from '../../../components/atoms/RoundButton';
import {useAuth} from '../../../contexts/Auth';

export default () => {
  const {logout} = useAuth();

  return (
    <Profile
      wallet={<Wallet />}
      personalInfoButton={
        <RoundButton
          title={'Alterar informações pessoais'}
          onPress={() => {}}
          buttonStyle={{width: 250}}
        />
      }
      logoutButton={
        <RoundButton
          title={'Terminar sessão'}
          onPress={() => logout()}
          buttonStyle={{width: 400}}
        />
      }
    />
  );
};
