import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Profil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Votre profil</Text>
      <Text>Nom d'utilisateur: JohnDoe</Text>
      <Text>Adresse e-mail: johndoe@example.com</Text>
      <Button title="Modifier le profil" onPress={() => handleEditProfile()} />
      <Button title="Déconnexion" onPress={() => handleLogout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Profil;
