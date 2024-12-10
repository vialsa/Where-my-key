import React, { createContext, useContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

interface User {
  name: string;
  username: string;
  password: string;
}

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: { username: string; password: string; keepConnected: boolean }) => Promise<void>;
  register: (name: string, username: string, password: string) => Promise<void>;
  forgotPassword: (username: string, newPassword: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async ({ username, password, keepConnected }: { username: string; password: string; keepConnected: boolean }) => {
    try {
      const userStored = await AsyncStorage.getItem('@safekey-user');
      if (userStored) {
        const storedUser: User = JSON.parse(userStored);

        // Verificar se username e password correspondem aos salvos
        if (storedUser.username === username && storedUser.password === password) {
          setUser(storedUser);
          setIsAuthenticated(true);

          // Manter o usuário conectado se o checkbox estiver marcado
          if (keepConnected) {
            await AsyncStorage.setItem('@safekey-keepConnected', 'true');
          }
        } else {
          throw new Error('Usuário ou senha inválidos.');
        }
      } else {
        throw new Error('Nenhum usuário registrado.');
      }
    } catch (error: any) {
      Alert.alert('Erro no Login', error.message || 'Não foi possível fazer login.');
    }
  };

  const register = async (name: string, username: string, password: string) => {
    try {
      const newUser: User = { name, username, password };

      // Salvar o usuário no AsyncStorage
      await AsyncStorage.setItem('@safekey-user', JSON.stringify(newUser));
      Alert.alert('Cadastro', 'Usuário cadastrado com sucesso!');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível cadastrar. Tente novamente mais tarde.');
    }
  };

  const forgotPassword = async (username: string, newPassword: string) => {
    try {
      const userStored = await AsyncStorage.getItem('@safekey-user');
      if (userStored) {
        const user: User = JSON.parse(userStored);

        // Verificar se o username fornecido existe
        if (user.username === username) {
          user.password = newPassword;
          await AsyncStorage.setItem('@safekey-user', JSON.stringify(user));
          Alert.alert('Recuperação de Senha', 'Senha alterada com sucesso.');
        } else {
          Alert.alert('Erro', 'Usuário não encontrado.');
        }
      } else {
        Alert.alert('Erro', 'Nenhum usuário registrado.');
      }
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível alterar a senha.');
    }
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    await AsyncStorage.removeItem('@safekey-keepConnected');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, forgotPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
