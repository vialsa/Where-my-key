import React from 'react';
import LoginScreen from './src/components/screens/LoginScreen';
import ForgotPasswordScreen from './src/components/screens/ForgotPasswordScreen';
import RegisterScreen from './src/components/screens/RegisterScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import ProfileScreen from './src/components/screens/ProfileScreen'
import ModalKeyScreen from './src/components/screens/ModalKeyEditScreen';
import AppNavigator from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/navigation/routesParams';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} /> {/* Registre a tela aqui */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

