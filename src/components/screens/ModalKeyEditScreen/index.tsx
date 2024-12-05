import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import Title from '../../titles/title';

export default function ModalKeyScreen() {
  return (
    <LinearGradient
    colors={['#A8F9FF', '#659599']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={stylesGlobal.container}>
        <Image 
          source={require('../../../../assets/img/senha.png')} // Imagem local
          style={styles.avatar} 
        />
        <Input placeholder="Nome" />
        <Input placeholder="Usuario" secureTextEntry />
        <Input placeholder="Senha" secureTextEntry />
        <View style={styles.buttonsArea}>
          <Button text="Voltar" type="secondary" onPress={() => {}} style={{top: 50, marginRight: 20}}  />
          <Button text="Salvar" type="warning" onPress={() => {}} style={{top: 50, marginLeft: 20}}  />
        </View>
    </LinearGradient>
  );
};
