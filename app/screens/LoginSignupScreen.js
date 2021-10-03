import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgimage: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 50,
    marginBottom: 30,
    width: 350,
    height: 130,
  },
  welcome: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  echannelling: {
    alignSelf: 'flex-start',
    marginLeft: 18,
    fontSize: 25,
  },
  boxDesc: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 40,
  },
  loginbox: {
    flex: 0.95,
    width: 360,
    alignItems: 'center',
  },
  inputDesc: {
    alignSelf: 'flex-start',
    marginLeft: 18,
    fontSize: 15,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function LoginSignupScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/Login.png')}
        style={styles.bgimage}
        resizeMode='cover'
      >
        <Image
          source={require('../assets/loginSignupLogo.png')}
          style={styles.logo}
        />
        <Text style={styles.welcome}> Welcome to</Text>
        <Text style={styles.echannelling}> E-Channeling App</Text>
        <ImageBackground
          source={require('../assets/loginbox.png')}
          style={styles.loginbox}
          resizeMode='stretch'
        >
          <Text style={styles.boxDesc}> Please Login to Your Account</Text>
          <Text style={styles.inputDesc}> Member ID or Email or NIC</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your member id or email or NIC'
          />
          <Text style={styles.inputDesc}> Password</Text>
          <TextInput style={styles.input} placeholder='Enter your password' />
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default LoginSignupScreen;
