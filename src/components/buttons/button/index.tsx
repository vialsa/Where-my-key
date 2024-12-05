import React from 'react';
import { TouchableOpacity, Text, ViewStyle, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface ButtonProps {
  text: string;
  type?: 'primary' | 'secondary' | 'danger' | 'warning';
  onPress?: () => void;
  style?: ViewStyle; // Adiciona suporte à prop `style`
}

export default function Button({ text, type = 'primary', onPress, style }: ButtonProps) {
  const isPrimary = type === 'primary';
  return (
    <TouchableOpacity style={[styles.button, styles[type], style]} onPress={onPress}>
      {isPrimary ? (
        <LinearGradient
          colors={['#61C92A', '#32746D']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[styles.gradient, style]} // Aplica estilo adicional no gradiente também, se necessário
        >
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
