import {StyleSheet} from 'react-native';
import {palette} from '../../../util/palette';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: palette.spacing,
  },
  nameContainer: {
    width: 50,
    alignItems: 'flex-start',
    backgroundColor: 'purple',
  },
  text: {textAlign: 'left'},
});
