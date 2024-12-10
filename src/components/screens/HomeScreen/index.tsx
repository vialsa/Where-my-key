import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import Card from '../../cards/card';
import Button from '../../buttons/button';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import { keys } from '../../../mock/keys';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
          return <Card data={item} />;
        }}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <Button text="Adicionar" type="primary" onPress={() => {}}   />
    </LinearGradient>
  );
}