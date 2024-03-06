import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/share.png')} style={styles.logo} />
      <Text style={styles.titre}>Share</Text>
      <Text style={styles.soustitre}>Partagez vos fichiers</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  soustitre: {
    fontSize: 18,
    color: 'gray',
  },
});

export default Header;
