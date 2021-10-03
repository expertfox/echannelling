import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginSignupScreen from './app/screens/LoginSignupScreen';
import { getHeaderTitle } from '@react-navigation/elements';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: 'red',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);

            return <View title={title} styles={styles.header}></View>;
          },
        }}
      >
        <Stack.Screen name='Home' component={WelcomeScreen} />
        <Stack.Screen name='Login' component={LoginSignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
