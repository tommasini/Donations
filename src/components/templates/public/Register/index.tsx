import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styles from './styles';

type RegisterProps = {
  form: ReactNode;
  loginButton: ReactNode;
};

const Register: React.FC<RegisterProps> = ({form, loginButton}) => {
  return (
    <View style={styles.container}>
      {form}
      <View style={styles.buttonContainer}>{loginButton}</View>
    </View>
  );
};

export default Register;
