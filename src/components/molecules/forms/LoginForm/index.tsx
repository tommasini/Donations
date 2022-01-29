import React from 'react';
import {View} from 'react-native';
import PasswordInput from '../../../atoms/PasswordInput';
import TextInput from '../../../atoms/TextInput';
import {palette} from '../../../../util/palette';
import RoundButton from '../../../atoms/RoundButton';

type LoginFormProps = {
  onLogin: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({onLogin}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <TextInput onChange={() => {}} placeholder={'email'} />
      <PasswordInput
        onChange={() => {}}
        placeholder={'Password'}
        containerStyle={{marginVertical: palette.spacing * 2}}
      />
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <RoundButton onPress={onLogin} title={'Entrar'} />
      </View>
    </View>
  );
};

export default LoginForm;
