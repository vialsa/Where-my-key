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
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const [email, setEmail] = useState(''); // Estado para o email
  const [password, setPassword] = useState(''); // Estado para a senha
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation<LoginScreenNavigationProp>(); 

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem(username);
      if (storedUser) {
        const userObj = JSON.parse(storedUser);
        if (userObj.password === password) {
          Alert.alert('Sucesso', 'Login bem-sucedido!');
          navigation.navigate('Home'); // Redireciona para a tela principal
        } }
    } catch (e) {
      Alert.alert('Erro', 'Erro ao tentar fazer login.');
    }
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
}
