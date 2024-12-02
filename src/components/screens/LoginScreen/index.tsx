import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import Title from '../../titles/title';
import Checkbox from 'expo-checkbox';
import stylesGlobal from '../../styles/global';
import styles from './styles';

export default function LoginScreen() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LinearGradient
    colors={['#A8F9FF', '#659599']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={stylesGlobal.container}>
      <Title title="Where's my key?" />
      <Text style={styles.subtitle}>Login</Text>
      <Input placeholder="User" />
      <Input placeholder="Senha" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isChecked} // O estado do checkbox
          onValueChange={setIsChecked} // Função para alterar o estado
          color={isChecked ? '#32746D' : undefined} // Define a cor quando marcado
        />
        <Text style={styles.checkboxText}>Manter-me conectado</Text>
      </View>
      <Button text="Login" type="primary" onPress={() => {}} style={{marginTop: 100}}/>  
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.register}>Cadastrar</Text>
      </TouchableOpacity>
      </LinearGradient>
  );
};


