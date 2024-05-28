import React from 'react';
import { View } from 'react-native';
import Login from '../components/Authentification/Login';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
};

export default Home;