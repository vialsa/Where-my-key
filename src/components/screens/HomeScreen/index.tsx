import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import Title from '../../titles/title';
import Checkbox from 'expo-checkbox';
import stylesGlobal from '../../styles/global';
import styles from './styles';

export default function HomeScreen() {

    const items = ['Item 1', 'Item 2']; // Lista de itens

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
            data={items}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
            renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
        />

        <Button text="Adicionar" type="primary" onPress={() => {}} style={{top: 180}}  />

    </LinearGradient>
  );
};


