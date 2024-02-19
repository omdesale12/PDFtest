import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({  }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Our App!</Text>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
