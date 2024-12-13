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
import { useAuth } from '../../../context/authContext';

export default function ProfileScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user, editUser } = useAuth(); // Obtém o usuário logado e a função de edição do contexto
  const [name, setName] = useState(user?.name || '');
  const [username, setUsername] = useState(user?.username || '');

  const handleEdit = async () => {
    const success = await editUser({ name, username });
    if (success) {
      Alert.alert('Sucesso', 'Dados editados com sucesso!');
    } else {
      Alert.alert('Erro', 'Não foi possível editar os dados.');
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
        source={require('../../../../assets/img/cara.png')} // Imagem local
        style={styles.avatar}
      />

      <Text style={styles.subtitle}>Editar Perfil</Text>

      <Text style={styles.label}>Nome:</Text>
      <Input placeholder="Nome" value={name} onChangeText={setName} />

      <Text style={styles.label}>Usuário:</Text>
      <Input placeholder="Usuário" value={username} onChangeText={setUsername} />

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
          onPress={handleEdit}
          style={{ top: 50, marginLeft: 20 }}
        />
      </View>
    </LinearGradient>
  );
}
