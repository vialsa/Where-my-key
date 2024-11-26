import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import Title from '../../titles/title';
import stylesGlobal from '../../styles/global';
import styles from './styles';

export default function LoginScreen() {

  return (
    <LinearGradient
    colors={['#A8F9FF', '#659599']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={stylesGlobal.container}>
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
      </LinearGradient>
  );
};


