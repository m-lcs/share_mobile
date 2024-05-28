import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profil = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Votre profil</Text>
            <Text>Nom: John</Text>
            <Text>Prénom: Doe</Text>
            <Text>Email: john@example.com</Text>
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
