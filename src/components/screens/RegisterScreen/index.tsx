import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import Title from '../../titles/title';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/routesParams';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const userObj = { username, password };
      await AsyncStorage.setItem(username, JSON.stringify(userObj));
      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      navigation.navigate('Login'); // Volta para a tela de login
    } catch (e) {
      Alert.alert('Erro', 'Erro ao registrar a conta.');
    }
  };


export default function RegisterScreen() {
  return (
    <LinearGradient
    colors={['#A8F9FF', '#659599']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={stylesGlobal.container}>
        <Title title="Where's my key?"/>
        <Text style={styles.subtitle}>Cadastrar</Text>
        <Input placeholder="User" />
        <Input placeholder="Senha" secureTextEntry />
        <Input placeholder="Confirmar Senha" secureTextEntry />
        <Input placeholder="Nome Completo" secureTextEntry />
        <Button text="Cadastrar" type="primary" onPress={() => {}} style={{top: 50}}  />
    </LinearGradient>
  );
};

