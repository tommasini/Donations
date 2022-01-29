import React, {ReactNode} from 'react';
import {TextInput as RNTextInput, View} from 'react-native';

import styles from './styles';

type TextInputProps = {
  onChange: () => void;
  placeholder: string;
  icon?: ReactNode;
};

const TextInput: React.FC<TextInputProps> = ({onChange, placeholder, icon}) => {
  return (
    <View style={styles.container}>
      {icon}
      <RNTextInput
        placeholder={placeholder}
        onChange={onChange}
        style={styles.input}
      />
    </View>
  );
};

export default TextInput;
