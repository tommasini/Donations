import React from 'react';
import {View} from 'react-native';
import TextInput from '../../../atoms/TextInput';
import {palette} from '../../../../util/palette';
import PasswordInput from '../../../atoms/PasswordInput';
import RoundButton from '../../../atoms/RoundButton';

type RegisterFormProps = {
  onChange: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({onChange}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <TextInput onChange={onChange} placeholder={'Email'} />
      <PasswordInput
        onChange={onChange}
        placeholder={'Password'}
        containerStyle={{marginVertical: palette.spacing * 2}}
      />
      <PasswordInput onChange={onChange} placeholder={'Confirm password'} />
      <View style={{marginTop: palette.spacing * 2}}>
        <RoundButton onPress={() => {}} title={'Registar'} />
      </View>
    </View>
  );
};

export default RegisterForm;
