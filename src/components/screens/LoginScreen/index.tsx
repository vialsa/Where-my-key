import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import Title from '../../titles/title';
import Checkbox from 'expo-checkbox';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import { isValidEmail, isStrongPassword, isNotEmpty } from '../../../validators/validador';
import * as SecureStore from 'expo-secure-store';

export default function LoginScreen() {
  const [email, setEmail] = useState(''); // Estado para o email
  const [password, setPassword] = useState(''); // Estado para a senha
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    // Validação dos campos
    if (!isNotEmpty(email)) {
      Alert.alert('Erro', 'O campo de email está vazio.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }

    if (!isNotEmpty(password)) {
      Alert.alert('Erro', 'O campo de senha está vazio.');
      return;
    }

    if (!isStrongPassword(password)) {
      Alert.alert(
        'Erro',
        'A senha deve conter pelo menos 8 caracteres, incluindo números e letras.'
      );
      return;
    }

    // Caso passe pelas validações
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  };

  return (
    <LinearGradient
      colors={['#A8F9FF', '#659599']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={stylesGlobal.container}>
      <Title title="Where's my key?" />

      <Text style={styles.subtitle}>Login</Text>

      {/* Input para o email */}
      <Input
        placeholder="User"
        value={email}
        onChangeText={setEmail} // Atualiza o estado com o valor digitado
      />

      {/* Input para a senha */}
      <Input
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword} // Atualiza o estado com o valor digitado
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
        onPress={handleLogin} // Chama a função de login ao pressionar o botão
        style={{ marginTop: 100 }}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.register}>Cadastrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};


