import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import LoginForm from '../../../components/molecules/forms/LoginForm';
import RoundButton from '../../../components/atoms/RoundButton';

import Login from '../../../components/templates/public/Login';
import {useAuth} from '../../../contexts/Auth';
import {mockData} from '../../../util/mockData';

export default () => {
  const {replace} = useNavigation<StackNavigationProp<any>>();
  const {login} = useAuth();
  const onLogin = () => {
    login(mockData.user);
    replace('Donator');
  };

  return (
    <Login
      form={<LoginForm onLogin={() => onLogin()} />}
      registerButton={
        <RoundButton
          onPress={() => {
            replace('Register');
          }}
          title={'Registar'}
        />
      }
    />
  );
};
