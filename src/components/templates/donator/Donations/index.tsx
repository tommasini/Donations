import React, {ReactNode} from 'react';
import {View} from 'react-native';

import styles from './styles';

type DonationsProps = {
  list: ReactNode;
};

const Donations: React.FC<DonationsProps> = ({list}) => {
  return <View style={styles.container}>{list}</View>;
};

export default Donations;
