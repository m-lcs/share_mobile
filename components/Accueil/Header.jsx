import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/share.png')} style={styles.logo} />
      <Text style={styles.titre}>Share</Text>
      <Text style={styles.soustitre}>Partagez vos fichiers et photo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: -20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  titre: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  soustitre: {
    fontSize: 22,
    color: 'gray',
  },
});

export default Header;
