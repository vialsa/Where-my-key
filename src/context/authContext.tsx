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
  login: (credentials: { username: string; password: string; keepConnected: boolean }) => Promise<boolean>;
  register: (name: string, username: string, password: string) => Promise<boolean>;
  forgotPassword: (username: string, newPassword: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async ({ username, password, keepConnected }: { username: string; password: string; keepConnected: boolean }): Promise<boolean> => {
    try {
      const userStored = await AsyncStorage.getItem('@safekey-user');
      if (userStored) {
        const storedUser: User = JSON.parse(userStored);

        if (storedUser.username === username && storedUser.password === password) {
          setUser(storedUser);
          setIsAuthenticated(true);

          if (keepConnected) {
            await AsyncStorage.setItem('@safekey-keepConnected', 'true');
          }
          return true;
        } else {
          Alert.alert('Erro', 'Usuário ou senha inválidos.');
        }
      }
    } catch (error) {
      Alert.alert('Erro no Login', 'Não foi possível realizar o login.');
    }
    return false;
  };

  const register = async (name: string, username: string, password: string): Promise<boolean> => {
    try {
      const newUser: User = { name, username, password };
      await AsyncStorage.setItem('@safekey-user', JSON.stringify(newUser));
      return true;
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível cadastrar. Tente novamente mais tarde.');
    }
    return false;
  };

  const forgotPassword = async (username: string, newPassword: string): Promise<boolean> => {
    try {
      const userStored = await AsyncStorage.getItem('@safekey-user');
      if (userStored) {
        const user: User = JSON.parse(userStored);
        if (user.username === username) {
          user.password = newPassword;
          await AsyncStorage.setItem('@safekey-user', JSON.stringify(user));
          return true;
        } else {
          Alert.alert('Erro', 'Usuário não encontrado.');
        }
      }
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível alterar a senha.');
    }
    return false;
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
