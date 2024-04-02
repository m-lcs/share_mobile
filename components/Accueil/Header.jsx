import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLoginPress = () => {
    navigation.navigate('Login'); 
  };

  const handleSignupPress = () => {
    navigation.navigate('Signup'); 
  };

  return (
    <View style={styles.header}>
      <Image source={require('../../assets/share.png')} style={styles.logo} />
      <Text style={styles.titre}>Share Mobile</Text>
      <Text style={styles.soustitre}>Partagez vos fichiers et photos. {'\n'}Discutez entre vous.</Text>
      {!isLoggedIn && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignupPress} style={styles.button}>
            <Text style={styles.buttonText}>Inscription</Text>
          </TouchableOpacity>
        </View>
      )}
      {isLoggedIn && (
        <View>
          <TouchableOpacity onPress={handleContentPress} style={styles.button}>
            <Text style={styles.buttonText}>Accéder au partage de fichiers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleContentPress} style={styles.button2}>
            <Text style={styles.buttonText}>Accéder au blog</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 140,
    paddingBottom: 20,
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
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4B9DA5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  button2: {
    backgroundColor: '#4B9DA5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Header;
