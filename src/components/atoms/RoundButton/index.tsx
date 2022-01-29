import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

type RoundButtonProps = {
  onPress: () => void;
  title: string;
  buttonStyle?: ViewStyle;
};

const RoundButton: React.FC<RoundButtonProps> = ({
  onPress,
  title,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;
