import React from 'react';
import { Text, TextProps } from 'react-native';
import styles from './styles';

interface TitleProps extends TextProps {
  title: string;
}

export default function Title({ title, ...props }: TitleProps) {
  return <Text style={styles.title} {...props}>{title}</Text>;
}
