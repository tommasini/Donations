import React, {ReactNode} from 'react';
import styles from './styles';
import {View} from 'react-native';

type LoginProps = {
  form: ReactNode;
  registerButton: ReactNode;
};
const Login: React.FC<LoginProps> = ({form, registerButton}) => {
  return (
    <View style={styles.container}>
      {form}
      <View style={styles.buttonContainer}>{registerButton}</View>
    </View>
  );
};

export default Login;
