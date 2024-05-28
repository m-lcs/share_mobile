import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.get(`https://s4-8055.nuage-peda.fr/share/api/users?email=${email}&password=${password}`);
            console.log('Connexion réussie:', response.data);

            const users = response.data['hydra:member'];
            const user = users.find(user => user.email === email);

            if (user) {
                console.log('Utilisateur trouvé:', user);

                await AsyncStorage.setItem('user', JSON.stringify(user));

                navigation.navigate('ListeFichiers');
            } else {
                console.error('Aucun utilisateur trouvé avec ces informations d\'identification.');
                setError('Aucun utilisateur trouvé avec ces informations d\'identification.');
            }
        } catch (error) {
            console.error('Erreur de connexion:', error.message);
            setError('Erreur de connexion: Veuillez réessayer.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#4B9DA5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default Login;
