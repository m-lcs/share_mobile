import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Accueil/Header' 
import Footer from './components/Accueil/Footer';
import Inscription from './components/Authentification/Inscription';
import Home from "./screens/Home"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Inscription" component={Inscription} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
