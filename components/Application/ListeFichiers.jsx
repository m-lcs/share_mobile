import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ListeFichiers = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);
    const [fichiers, setFichiers] = useState([]);

    useEffect(() => {
        const fetchUserAndFiles = async () => {
            try {
                const userData = await AsyncStorage.getItem('user');
                console.log('Données utilisateur récupérées:', userData);

                if (userData) {
                    const parsedUser = JSON.parse(userData);
                    setUser(parsedUser);
                    console.log('Utilisateur analysé:', parsedUser);

                    const fichiersData = await Promise.all(
                        parsedUser.fichiers.map(async (fichierUri) => {
                            try {
                                console.log(`Tentative de récupération du fichier: ${fichierUri}`);
                                const response = await axios.get(`https://s4-8055.nuage-peda.fr${fichierUri}`);
                                return response.data;
                            } catch (error) {
                                console.error(`Erreur lors de la récupération du fichier ${fichierUri}:`, error.message);
                                return null;
                            }
                        })
                    );

                    console.log('Données de fichiers récupérées:', fichiersData);
                    setFichiers(fichiersData.filter(fichier => fichier !== null));
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error.message);
            }
        };

        fetchUserAndFiles();
    }, []);

    return (
        <View>
            {user && (
                <View>
                    <Text>Nom: {user.nom}</Text>
                    <Text>Prénom: {user.prenom}</Text>
                    <Text>Email: {user.email}</Text>
                </View>
            )}
            <Text>Liste des fichiers</Text>
            {fichiers.length > 0 ? (
                fichiers.map((fichier, index) => (
                    <View key={index}>
                        <Text>Nom original: {fichier.nomOriginal}</Text>
                        <Text>Nom sur le serveur: {fichier.nomServeur}</Text>
                        <Text>Extension: {fichier.extension}</Text>
                        <Text>Taille: {fichier.taille} octets</Text>
                        <Text>Date d'envoi: {fichier.dateEnvoi}</Text>
                    </View>
                ))
            ) : (
                <Text>Aucun fichier trouvé</Text>
            )}
            <Button
                title="Ajouter un fichier"
                onPress={() => navigation.navigate('AjoutFichier')}
            />
        </View>
    );
};

export default ListeFichiers;
