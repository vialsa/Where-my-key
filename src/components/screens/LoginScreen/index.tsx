import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import Input from '../../inputs/input';
import Button from '../../buttons/button';
import Title from '../../titles/title';
import Checkbox from 'expo-checkbox';
import stylesGlobal from '../../styles/global';
import styles from './styles';

export default function LoginScreen() {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <LinearGradient
      colors={['#A8F9FF', '#659599']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={stylesGlobal.container}
    >
      <Title title="Where's my key?" />
      <Text style={styles.subtitle}>Login</Text>
      <Input placeholder="User" />
      <Input placeholder="Senha" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? '#32746D' : undefined}
        />
        <Text style={styles.checkboxText}>Manter-me conectado</Text>
      </View>
      <Button
        text="Login"
        type="primary"
        onPress={() => navigation.navigate('HomeScreen')}
        style={{ marginTop: 100 }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.register}>Cadastrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
