import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../components/screens/HomeScreen';
import LoginScreen from '../components/screens/LoginScreen';
import ForgotPasswordScreen from '../components/screens/ForgotPasswordScreen';
import RegisterScreen from '../components/screens/RegisterScreen'
import ProfileScreen from '../components/screens/ProfileScreen'
import ModalKeyEditScreen from '../components/screens/ModalKeyEditScreen'
import { RootStackParamList } from './routesParams';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen 
          name="ProfileScreen" 
          component={ProfileScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen 
          name="ModalKeyEditScreen" 
          component={ModalKeyEditScreen}
          options={{ presentation: 'modal', headerShown: true }} // Define como modal
        />
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen} 
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
