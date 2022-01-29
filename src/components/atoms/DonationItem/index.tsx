import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {DonationType} from '../../../screens/donator/Donations';

type DonationItemProps = {
  item: DonationType;
};

const DonationItem: React.FC<DonationItemProps> = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.text}>{item.donated}€</Text>
      </View>
    </View>
  );
};
export default DonationItem;
