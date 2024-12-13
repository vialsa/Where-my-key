import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import Card from '../../cards/card';
import Button from '../../buttons/button';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [keys, setKeys] = useState<any[]>([]); // Estado para armazenar as chaves

  // Função para carregar as chaves do AsyncStorage
  const loadKeys = async () => {
    try {
      const keysString = await AsyncStorage.getItem('@safekey-keys'); // Recupera as chaves
      if (keysString) {
        setKeys(JSON.parse(keysString)); // Converte de volta para um array de objetos
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as chaves.');
    }
  };

  // Função para excluir uma chave
  const deleteKey = async (id: string) => {
    try {
      const updatedKeys = keys.filter((key) => key.id !== id); // Filtra a chave a ser excluída
      await AsyncStorage.setItem('@safekey-keys', JSON.stringify(updatedKeys)); // Atualiza o AsyncStorage
      setKeys(updatedKeys); // Atualiza o estado
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir a chave.');
    }
  };

  // Carregar as chaves ao montar o componente
  useEffect(() => {
    loadKeys();
  }, []);

  return (
    <LinearGradient
      colors={['#A8F9FF', '#659599']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={stylesGlobal.container}
    >
      <View style={styles.cabecalho}>
        <Image
          source={require('../../../../assets/img/cara.png')}
          style={styles.avatar}
        />
        <Text style={styles.cabecalhoText}>Fulano de Tal</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Image
            source={require('../../../../assets/img/menu.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Minhas Chaves</Text>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar"
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <Image
            source={require('../../../../assets/img/seach.png')}
            style={styles.seachImage}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={keys}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Card data={item} onDelete={deleteKey} />; // Passa a função deleteKey para o Card
        }}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <Button text="Adicionar" type="primary" onPress={() => navigation.navigate('AddKeyScreen')} />
    </LinearGradient>
  );
}
