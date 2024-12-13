// AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './routesParams'; // Certifique-se de importar o tipo de rotas
import LoginScreen from '../components/screens/LoginScreen';
import HomeScreen from '../components/screens/HomeScreen';
import RegisterScreen from '../components/screens/RegisterScreen';

const Stack = createStackNavigator<RootStackParamList>(); // Passando o tipo para o Stack

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
