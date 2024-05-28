import React from 'react';
import { View } from 'react-native';
import Signup from '../components/Authentification/Signup';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Signup />
    </View>
  );
};

export default Home;