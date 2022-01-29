import React, {useState} from 'react';
import {TextInput, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {palette} from '../../../util/palette';
import styles from './styles';

type TextInputProps = {
  onChange: () => void;
  placeholder: string;
  containerStyle?: ViewStyle;
};

const PasswordInput: React.FC<TextInputProps> = ({
  onChange,
  placeholder,
  containerStyle,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const onPress = () => {
    setIsHidden(hidden => !hidden);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
        textContentType={'password'}
        secureTextEntry={isHidden}
        style={styles.password}
      />

      <Icon
        name={isHidden ? 'eye' : 'eye-slash'}
        color={'black'}
        size={20}
        style={{paddingRight: palette.spacing}}
        onPress={onPress}
      />
    </View>
  );
};

export default PasswordInput;
