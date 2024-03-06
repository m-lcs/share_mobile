import React from "react";
import { View } from "react-native";
import Header from "./components/Accueil/Header";
import Footer from "./components/Accueil/Footer";
import Inscription from "./components/Authentification/Inscription";
import { NavigationContainer } from '@react-navigation/native';
// import Body from './components/Authentification/Body';

const App = () => {
  return (
    <View>
      <NavigationContainer>
        <Header />
        <Footer />
        <Inscription />
      </NavigationContainer>
    </View>
  );
};

export default App;
