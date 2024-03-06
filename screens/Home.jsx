import React from 'react';
import { View } from 'react-native';
import Header from '../components/Accueil/Header';
import Footer from '../components/Accueil/Footer';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Footer />
    </View>
  );
};

export default Home;