import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Signup from './screens/Register';
import Content from './screens/Content';
import ProfilScreen from './screens/ProfilScreen';
import Login from './screens/Login';
import AjoutMessage from './components/Application/AjoutMessage';
import AjoutFichierScreen from '../screens/AjoutFichier';

const Stack = createNativeStackNavigator();

const Appli = () => {
  const user = { nom: 'Timoté' }; 

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Accueil" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Profil" component={ProfilScreen} />
          <Stack.Screen name="AjoutFichier" component={AjoutFichierScreen} />
          <Stack.Screen name="Content">
            {() => <Content nom={user.nom} />}
          </Stack.Screen>
          <Stack.Screen name="AjoutMessage" component={AjoutMessage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Appli;
