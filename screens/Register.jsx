import React from 'react';
import { View } from 'react-native';
import Inscription from '../components/Authentification/Inscription';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Inscription />
    </View>
  );
};

export default Home;