import React from 'react';
import { View, Text } from 'react-native';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import styles from './styles';
import Title from '../../titles/title';

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      <Title title="Where's my key?" />
      <Text style={styles.subtitle}>Alterar Senha</Text>
      <Input placeholder="User" />
      <Input placeholder="Senha" secureTextEntry />
      <Input placeholder="Confirmar Senha" secureTextEntry />
      <Button text="Alterar" type="primary" onPress={() => {}} />
      <Button text="Cancelar" type="danger" onPress={() => {}} />
    </View>
  );
};
