import { Keys } from '../mock/keys';

export type RootStackParamList = {
    HomeScreen: undefined;
    LoginScreen: undefined;
    ForgotPasswordScreen: undefined;
    ModalKeyEditScreen: Keys; // Permitir que a rota aceite parâmetros do tipo Keys
    ProfileScreen: undefined;
    RegisterScreen: undefined;
    AddKeyScreen: undefined;

  };
  