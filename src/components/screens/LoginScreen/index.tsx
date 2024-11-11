import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import Title from '../../titles/title';
import styles from './styles';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <Title title="Where's my key?" />
      <Input placeholder="User" />
      <Input placeholder="Senha" secureTextEntry />
      <Button text="Login" type="primary" onPress={() => {}} />  
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.register}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};


