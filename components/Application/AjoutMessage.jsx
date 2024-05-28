import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const AjoutMessage = () => {
  const [titre, setTitre] = useState('');
  const [contenu, setContenu] = useState('');
  const [error, setError] = useState('');

  const handleAjouterMessage = async () => {
    try {
      if (!titre || !contenu) {
        setError('Veuillez remplir tous les champs');
        return;
      }

      const response = await axios.post('https://s4-8055.nuage-peda.fr/forum/api/messages', {
        titre,
        contenu,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setTitre('');
      setContenu('');
      setError('');

    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'ajout du message : ', error);
      setError('Une erreur s\'est produite lors de l\'ajout du message');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un message</Text>
      <TextInput
        style={styles.input}
        placeholder="Titre"
        value={titre}
        onChangeText={setTitre}
      />
      <TextInput
        style={styles.input}
        placeholder="Contenu"
        value={contenu}
        onChangeText={setContenu}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Ajouter" onPress={handleAjouterMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default AjoutMessage;