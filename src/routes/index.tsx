import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/public/Login';
import Register from '../screens/public/Register';
import DonatorStack from './DonatorStack';

/** Stack of donator
 * Screen 1 Login
 * Screen 2 Register
 * Profile with digital wallet
 * List of donations
 * QR Code reader
 */

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Donator" component={DonatorStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
