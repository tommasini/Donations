import React, {ReactNode} from 'react';
import {View} from 'react-native';

import styles from './styles';

type ProfileProps = {
  wallet: ReactNode;
  personalInfoButton: ReactNode;
  logoutButton: ReactNode;
};

const Profile: React.FC<ProfileProps> = ({
  wallet,
  personalInfoButton,
  logoutButton,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.donationsContainer}>{wallet}</View>
      <View style={styles.personalInfoContainer}>
        {personalInfoButton}
        {logoutButton}
      </View>
    </View>
  );
};
export default Profile;
