import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BottomHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Déjà utilisateur ?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Pas encore membre ?</Text>
      <TouchableOpacity>
        <Text style={styles.link}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default BottomHeader;
