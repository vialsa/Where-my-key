import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import Title from '../../titles/title';

export default function ForgotPasswordScreen() {
  return (
    <LinearGradient
    colors={['#A8F9FF', '#659599']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={stylesGlobal.container}>
      <Title title="Where's my key?" />
      <Text style={styles.subtitle}>Alterar Senha</Text>
      <Input placeholder="User" />
      <Input placeholder="Senha" secureTextEntry />
      <Input placeholder="Confirmar Senha" secureTextEntry />
      <Button text="Alterar" type="primary" onPress={() => {}} style={{marginTop: 50}}/>
      <Button text="Cancelar" type="danger" onPress={() => {}} />
    </LinearGradient>
  );
};
