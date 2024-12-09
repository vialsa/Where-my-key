import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import Title from '../../titles/title';

export default function ProfileScreen() {
  return (
    <LinearGradient
    colors={['#A8F9FF', '#659599']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={stylesGlobal.container}>
        <Image 
          source={require('../../../../assets/img/cara.png')} // Imagem local
          style={styles.avatar} 
        />
        <Text style={styles.subtitle}>Fulano de tal</Text>
        <Input placeholder="Nome" />
        <Input placeholder="Usuario" secureTextEntry />
        <Input placeholder="Email" secureTextEntry />
        <View style={styles.buttonsArea}>
          <Button text="Voltar" type="secondary" onPress={() => {}} style={{top: 50, marginRight: 20}}  />
          <Button text="Editar" type="warning" onPress={() => {}} style={{top: 50, marginLeft: 20}}  />
        </View>
    </LinearGradient>
  );
};
