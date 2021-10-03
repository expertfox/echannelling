import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    marginTop: 50,
    marginBottom: 30,
  },
  btnGetStarted: {
    width: 200,
    height: 50,
    backgroundColor: '#5FE15C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 50,
  },
  welcomeHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
  welcomeDesc: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'left',
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#308FE8',
    alignItems: 'center',
  },
});

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/LandingScreenLogo.png')}
      />
      <Text style={styles.welcomeHeading}>We are No 1. Channeling Website</Text>
      <Text style={styles.welcomeDesc}>
        e-Channelling PLC is the pioneer software development and ICT service
        provider to the Healthcare industry in Sri Lanka. It is the first
        company in Sri Lanka to offer a complete e-commerce based service and
        the first public quoted Technology Company in the Colombo Stock
        Exchange. E-Channelling has consistently been part of the 100 top brands
        in Sri Lanka.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.btnGetStarted}
      >
        <Text style={styles.welcomeHeading}>Get Started</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

export default WelcomeScreen;
