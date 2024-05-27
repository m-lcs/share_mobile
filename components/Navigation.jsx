import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomHeader from './BottomHeader';
import Inscription from './Inscription';
import ProfilScreen from './ProfilScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomHeader" headerMode="none">
        <Stack.Screen name="Profil" component={ProfilScreen} />
        <Stack.Screen name="BottomHeader" component={BottomHeader} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
