import {StyleSheet} from 'react-native';
import {palette} from '../../../util/palette';

export default StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: palette.radius,
  },
  password: {
    flex: 1,
    height: '100%',
    paddingLeft: palette.spacing,
    backgroundColor: 'green',
    color: '#424242',
    borderRadius: palette.radius,
  },
});
