import {StyleSheet} from 'react-native';
import {palette} from '../../../../util/palette';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingHorizontal: palette.spacing * 5,
    backgroundColor: 'yellow',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginTop: palette.spacing * 2,
  },
});
