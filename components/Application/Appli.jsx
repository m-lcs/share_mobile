import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ConnectedPage = ({ nom }) => {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`https://s4-8055.nuage-peda.fr/forum/api/messages?page=${page}`);
        if (response.data && response.data['hydra:member']) {
          setMessages(response.data['hydra:member']);
          setHasNextPage(!!response.data['hydra:view']['hydra:next']);
        } else {
          console.error('La réponse de l\'API est invalide : ', response.data);
        }
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des messages : ', error);
      }
    };

    fetchMessages();

    const interval = setInterval(fetchMessages, 1000);

    return () => clearInterval(interval);
  }, [page]);

  const goToPreviousPage = () => {
    setPage(page - 1);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const navigateToAddMessage = () => {
    navigation.navigate('AjoutMessage');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map(message => (
          <View key={message.id} style={styles.message}>
            <Text style={styles.messageTitle}>{message.titre}</Text>
            <Text>{message.contenu}</Text>
            <Text>Posté par : {message.user.prenom} {message.user.nom}</Text>
            <Text>{message.datePoste}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        <TouchableOpacity onPress={goToPreviousPage} disabled={page === 1}>
          <Text style={[styles.paginationButton, page === 1 && styles.disabledButton]}>Page précédente</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextPage} disabled={!hasNextPage}>
          <Text style={[styles.paginationButton, !hasNextPage && styles.disabledButton]}>Page suivante</Text>
        </TouchableOpacity>
      </View>
      <Button title="Ajouter un message" onPress={navigateToAddMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  messagesContainer: {
    flex: 1,
  },
  message: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  messageTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  paginationButton: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  disabledButton: {
    color: '#ccc',
  },
});

export default ConnectedPage;
