import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomHeader = () => {
  const navigation = useNavigation();

  const goToInscription = () => {
    navigation.navigate('Inscription');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Déjà utilisateur ?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <Text style={styles.smallText}>Pas encore membre ?</Text>
      <TouchableOpacity onPress={goToInscription}>
        <Text style={[styles.link, styles.signup]}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 400,
  },
  smallText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#4B9DA5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  link: {
    color: 'blue',
    fontSize: 20,
  },
  signup: {
    textDecorationLine: 'none',
    color: '#4B9DA5',
  },
});

export default BottomHeader;