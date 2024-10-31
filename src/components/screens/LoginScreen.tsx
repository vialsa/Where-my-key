import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <div>
        <View style={styles.container}>
        <Text style={styles.title}>Where's my key?</Text>

        <Text style={styles.label}>Login</Text>

        <TextInput
            style={styles.input}
            placeholder="User"
            placeholderTextColor="#777"
        />

        <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#777"
        />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueci a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.register}>Cadastrar</Text>
        </TouchableOpacity>
        </View>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3E5FC', // Cor de fundo similar
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  forgotPassword: {
    color: '#333',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  register: {
    color: '#333',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
