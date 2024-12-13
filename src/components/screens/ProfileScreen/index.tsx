import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import stylesGlobal from '../../styles/global';
import styles from './styles';
import { useAuth } from '../../../context/authContext';

export default function ProfileScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user } = useAuth(); // Obtém o usuário logado do contexto de autenticação

  return (
    <LinearGradient
      colors={['#A8F9FF', '#659599']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={stylesGlobal.container}
    >
      <Image
        source={require('../../../../assets/img/cara.png')} // Imagem local
        style={styles.avatar}
      />

      <Text style={styles.subtitle}>{user?.name || 'Nome não disponível'}</Text>

      <Text style={styles.label}>Nome:</Text>
      <Input placeholder="Nome" value={user?.name || ''} editable={false} />

      <Text style={styles.label}>Usuário:</Text>
      <Input placeholder="Usuário" value={user?.username || ''} editable={false} />

      <View style={styles.buttonsArea}>
        <Button
          text="Voltar"
          type="secondary"
          onPress={() => navigation.navigate('HomeScreen')}
          style={{ top: 50, marginRight: 20 }}
        />
        <Button
          text="Editar"
          type="warning"
          onPress={() => {}}
          style={{ top: 50, marginLeft: 20 }}
        />
      </View>
    </LinearGradient>
  );
}
