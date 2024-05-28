import React, { useState } from 'react';
import { View, Text, Button, TextInput, Platform } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AjouterFichier = ({ navigation }) => {
    const [nomFichier, setNomFichier] = useState('');
    const [extension, setExtension] = useState('');
    const [fichierSelectionne, setFichierSelectionne] = useState(null);

    const handleAjouterFichier = async () => {
        try {
            const userData = await AsyncStorage.getItem('user');
            const user = JSON.parse(userData);

            const formData = new FormData();
            formData.append('file', {
                uri: fichierSelectionne.uri,
                name: fichierSelectionne.name,
                type: fichierSelectionne.type
            });

            const response = await axios.post('https://s4-8055.nuage-peda.fr/share/api/fichiers', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            navigation.navigate('ListeFichiers');
        } catch (error) {
            console.error('Erreur lors de l\'ajout du fichier:', error.message);
        }
    };

    const selectionnerFichier = async () => {
        try {
            const { type, uri, name } = await DocumentPicker.getDocumentAsync({
                type: Platform.OS === 'ios' ? 'image/*' : 'application/pdf',
            });
            
            setFichierSelectionne({ type, uri, name });

            const extensionFichier = name.split('.').pop();
            setExtension(extensionFichier);

            const nomSansExtension = name.split('.').slice(0, -1).join('.');
            setNomFichier(nomSansExtension);
        } catch (error) {
            console.error('Erreur lors de la sélection du fichier:', error.message);
        }
    };

    return (
        <View>
            <Text>Ajouter un fichier</Text>
            <Button title="Sélectionner un fichier" onPress={selectionnerFichier} />
            {fichierSelectionne && (
                <View>
                    <Text>Nom du fichier: {nomFichier}</Text>
                    <Text>Extension: {extension}</Text>
                </View>
            )}
            <Button title="Ajouter" onPress={handleAjouterFichier} />
        </View>
    );
};

export default AjouterFichier;
