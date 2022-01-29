import React from 'react';
import {Text} from 'react-native';
import styles from '../../templates/donator/Profile/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RoundButton from '../../atoms/RoundButton';
import {mockData} from '../../../util/mockData';

const Wallet = () => {
  return (
    <>
      <Text style={styles.title}>A sua carteira tem </Text>
      <Text style={styles.title}>{mockData.user.wallet}€</Text>

      <Icon name={'account-balance'} size={100} />
      <RoundButton onPress={() => {}} title={'Adicionar €'} />
    </>
  );
};

export default Wallet;
