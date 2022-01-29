import {StyleSheet} from 'react-native';
import {palette} from '../../../util/palette';

export default StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: palette.spacing,
    borderRadius: palette.radius,
    borderWidth: 1,
    borderColor: 'black',
  },
});
