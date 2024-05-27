import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profil = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUserFromStorage = async () => {
            try {
                const userFromStorage = await AsyncStorage.getItem('user');
                if (userFromStorage) {
                    setUser(JSON.parse(userFromStorage));
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des informations utilisateur depuis AsyncStorage:', error.message);
            }
        };

        getUserFromStorage();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Votre profil</Text>
            {user && (
                <>
                    <Text>Nom: {user.nom}</Text>
                    <Text>Prénom: {user.prenom}</Text>
                    <Text>Email: {user.email}</Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Profil;
