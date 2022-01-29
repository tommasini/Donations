import React from 'react';
import RegisterForm from '../../../components/molecules/forms/RegisterForm';
import RoundButton from '../../../components/atoms/RoundButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Register from '../../../components/templates/public/Register';

export default () => {
  const {replace} = useNavigation<StackNavigationProp<any>>();

  return (
    <Register
      form={<RegisterForm onChange={() => {}} />}
      loginButton={
        <RoundButton
          onPress={() => {
            replace('Login');
          }}
          title={'Entrar'}
        />
      }
    />
  );
};
