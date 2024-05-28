import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListeFichiers = () => {
    const [fichiers, setFichiers] = useState([]);

    useEffect(() => {
        const fetchFichiers = async () => {
            try {
                // Récupérer l'utilisateur actuellement connecté depuis AsyncStorage
                const user = await AsyncStorage.getItem('user');
                if (user) {
                    const userData = JSON.parse(user);
                    const response = await axios.get(`https://s4-8055.nuage-peda.fr/share/api/fichiers?page=1&utilisateur=${userData.id}`);
                    setFichiers(response.data['hydra:member']);
                } else {
                    console.error('Aucun utilisateur trouvé');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des fichiers:', error.message);
            }
        };

        fetchFichiers();
    }, []);

    return (
        <View>
            <Text>Liste des fichiers</Text>
            {fichiers.length > 0 ? (
                fichiers.map((fichier, index) => (
                    <View key={index}>
                        <Text>Nom: {fichier.nom}</Text>
                    </View>
                ))
            ) : (
                <Text>Aucun fichier trouvé</Text>
            )}
        </View>
    );
};

export default ListeFichiers;
