import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface ButtonProps {
  text: string;
  type?: 'primary' | 'secondary' | 'danger';
  onPress?: () => void;
}

export default function Button({ text, type = 'primary', onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, styles[type]]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
