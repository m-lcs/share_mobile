import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ConnectedPage = ({ nom }) => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('Profil');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.greeting}>Bonjour ! {nom}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icon}>
            <MaterialIcons name="notifications" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={handleProfilePress}>
            <MaterialIcons name="person" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
});

export default ConnectedPage;
