import {StyleSheet} from 'react-native';
import {palette} from '../../../../util/palette';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    paddingHorizontal: palette.spacing * 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
