import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ModalKeyScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const addKey = async () => {
    if (!nome || !usuario || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const newKey = {
      id: new Date().getTime().toString(), // Gerar um ID único
      user: usuario,  // Usar 'user' ao invés de 'usuario'
      key: senha      // Usar 'key' ao invés de 'senha'
    };

    try {
      // Recupera as chaves armazenadas
      const storedKeys = await AsyncStorage.getItem('@safekey-keys');
      const keysArray = storedKeys ? JSON.parse(storedKeys) : [];
      
      // Adiciona a nova chave ao array
      keysArray.push(newKey);
      
      // Salva o array atualizado de chaves
      await AsyncStorage.setItem('@safekey-keys', JSON.stringify(keysArray));
      
      // Volta para a tela principal após adicionar a chave
      navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível adicionar a chave.');
    }
  };

  return (
    <LinearGradient
      colors={['#A8F9FF', '#659599']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={stylesGlobal.container}
    >
      <Image 
        source={require('../../../../assets/img/senha.png')} // Imagem local
        style={styles.avatar} 
      />
      <Input 
        placeholder="Nome" 
        value={nome}
        onChangeText={setNome} 
      />
      <Input 
        placeholder="Usuário" 
        value={usuario}
        onChangeText={setUsuario}
      />
      <Input 
        placeholder="Senha" 
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <View style={styles.buttonsArea}>
        <Button 
          text="Voltar" 
          type="secondary" 
          onPress={() => navigation.navigate('HomeScreen')} 
          style={{ top: 50, marginRight: 20 }} 
        />
        <Button 
          text="Adicionar" 
          type="warning" 
          onPress={addKey} 
          style={{top: 50, marginLeft: 20}} 
        />
      </View>
    </LinearGradient>
  );
}
