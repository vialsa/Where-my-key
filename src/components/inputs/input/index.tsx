import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

// Usando forwardRef para que o componente possa ser referenciado pelo react-hook-form
const Input = forwardRef<TextInput, TextInputProps>((props, ref) => {
  return <TextInput ref={ref} style={styles.input} {...props} />;
});

export default Input;


