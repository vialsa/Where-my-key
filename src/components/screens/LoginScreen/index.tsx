import React, { useState } from 'react';

import {View,Text,Alert,KeyboardAvoidingView,Platform,ScrollView,TouchableWithoutFeedback,Keyboard,} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import Title from '../../titles/title';
import Checkbox from 'expo-checkbox';
import { useAuth } from '../../../context/authContext';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import { isValidEmail, isStrongPassword, isNotEmpty } from '../../../validators/validador';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const { login } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    try {
      const success = await login({ username, password, keepConnected: isChecked });
      if (success) {
        navigation.navigate('HomeScreen');
      }
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível fazer login.');

    }
  };

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <LinearGradient
            colors={['#A8F9FF', '#659599']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={stylesGlobal.container}
          >
            <Title title="Where's my key?" />
            <Text style={styles.subtitle}>Login</Text>
            <Input placeholder="Usuário" value={username} onChangeText={setUsername} />
            <Input
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? '#32746D' : undefined}
              />
              <Text style={styles.checkboxText}>Manter-me conectado</Text>
            </View>
            <Button
              text="Login"
              type="primary"
              onPress={handleLogin}
              style={{ marginTop: 100 }}
            />
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              <Text style={styles.forgotPassword}>Esqueci a senha</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.register}>Cadastrar</Text>
            </TouchableWithoutFeedback>
          </LinearGradient>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}
