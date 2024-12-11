import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import Title from '../../titles/title';
import { useAuth } from '../../../context/authContext';

export default function ForgotPasswordScreen() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { forgotPassword } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleForgotPassword = async () => {
    if (!username || !newPassword || !confirmPassword) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const success = await forgotPassword(username, newPassword);
      if (success) {
        Alert.alert('Sucesso', 'Senha alterada com sucesso!');
        navigation.navigate('LoginScreen');
      }
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível alterar a senha.');
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
      <Text style={styles.subtitle}>Alterar Senha</Text>
      <Input placeholder="Usuário" value={username} onChangeText={setUsername} />
      <Input placeholder="Nova Senha" value={newPassword} onChangeText={setNewPassword} secureTextEntry />
      <Input placeholder="Confirmar Nova Senha" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      <Button text="Alterar" type="primary" onPress={handleForgotPassword} style={{ marginTop: 50 }} />
      <Button text="Cancelar" type="danger" onPress={() => navigation.navigate('LoginScreen')} style={{ marginTop: 10 }} />
    </LinearGradient>
  );
}