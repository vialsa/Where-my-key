import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import Title from '../../titles/title';
import { useAuth } from '../../../context/authContext';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useAuth();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      await register('Novo Usuário', username, password);
      Alert.alert('Cadastro', 'Usuário cadastrado com sucesso!');
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível cadastrar.');
    }
  };

  return (
    <LinearGradient
      colors={['#A8F9FF', '#659599']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={stylesGlobal.container}
    >
      <Title title="Where's my key?" />
      <Text style={styles.subtitle}>Cadastrar</Text>
      <Input placeholder="Usuário" value={username} onChangeText={setUsername} />
      <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <Input placeholder="Confirmar Senha" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      <Button text="Cadastrar" type="primary" onPress={handleRegister} style={{ marginTop: 50 }} />
    </LinearGradient>
  );
}
