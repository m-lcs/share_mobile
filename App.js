// Appli.jsx
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Inscription from './screens/Register';
import Content from './screens/Content';

const Stack = createNativeStackNavigator();

const Appli = () => {
  const user = { nom: 'Timoté' }; 

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Inscription" component={Inscription} />
          <Stack.Screen name="Content">
            {() => <Content nom={user.nom} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Appli;
