import React from 'react';
import Donations from '../../screens/donator/Donations';
import Profile from '../../screens/donator/Profile';
import QRCodeReader from '../../screens/donator/QRCodeReader';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const DonatorStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Donations'} component={Donations} />
      <Tab.Screen name={'QRCodeReader'} component={QRCodeReader} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  );
};

export default DonatorStack;
