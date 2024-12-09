import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import Title from '../../titles/title';
import Checkbox from 'expo-checkbox';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {

    const [password, setPassword] = useState(''); // Estado para armazenar a senha digitada
    const [passwordsList, setPasswordsList] = useState<string[]>([]); // Estado para armazenar as senhas salvas
  
    // Função para adicionar uma nova senha
    const addPassword = async () => {
      if (password) {
        const newPasswordList = [...passwordsList, password];
        setPasswordsList(newPasswordList);
        // Salvar a lista de senhas no AsyncStorage
        await AsyncStorage.setItem('passwords', JSON.stringify(newPasswordList));
        setPassword(''); // Limpar o campo de senha
      } else {
        alert('Insira uma senha válida.');
      }
    };
  
    // Função para carregar as senhas armazenadas no AsyncStorage quando o componente for carregado
    const loadPasswords = async () => {
      const storedPasswords = await AsyncStorage.getItem('passwords');
      if (storedPasswords) {
        setPasswordsList(JSON.parse(storedPasswords));
      }
    };
  
    // Carregar as senhas ao iniciar o componente
    React.useEffect(() => {
      loadPasswords();
    }, []);    

  return (
    <LinearGradient
    colors={['#A8F9FF', '#659599']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={stylesGlobal.container}>

        <View style={styles.cabecalho}>
            <Image 
            source={require('../../../../assets/img/cara.png')} // Imagem local
            style={styles.avatar} 
            />
            <Text style={styles.cabecalhoText}>Fulano de Tal</Text>
            <TouchableOpacity>
                <Image
                source={require('../../../../assets/img/menu.png')}
                style={styles.menuImage}
                />
            </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}> Minhas Chaves </Text> 

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
            data={passwordsList}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
            renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
        />

        <Button text="Adicionar" type="primary" onPress={() => {}} style={{top: 180}}  />

    </LinearGradient>
  );
};


