import React, { useState } from 'react';

import { View, Text, Alert, KeyboardAvoidingView,Platform,ScrollView,TouchableWithoutFeedback,Keyboard, } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import Title from '../../titles/title';
import { useAuth } from '../../../context/authContext';
import stylesGlobal from '../../styles/global';
import styles from './styles';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { register } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleRegister = async () => {
    if (!name || !username || !password) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    try {
      const success = await register(name, username, password);
      if (success) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('LoginScreen');
      }
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível realizar o cadastro.');
    }
  };

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <LinearGradient
            colors={['#A8F9FF', '#659599']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={stylesGlobal.container}
          >
            <Title title="Where's my key?" />
            <Text style={styles.subtitle}>Cadastrar</Text>
            <Input placeholder="Nome" value={name} onChangeText={setName} />
            <Input placeholder="Usuário" value={username} onChangeText={setUsername} />
            <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
            <Button text="Cadastrar" type="primary" onPress={handleRegister} style={{ marginTop: 50 }} />
            <Button text="Cancelar" type="danger" onPress={() => navigation.navigate('LoginScreen')} style={{ marginTop: 10 }} />
          </LinearGradient>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

}
