import { object, string, boolean } from 'yup';

const LoginSchema = object({
  username: string()
    .trim()
    .required('Nome de usuário é obrigatório.'),
  password: string()
    .trim()
    .required('Senha é obrigatória.'),
  keepConnected: boolean(),
});

export default LoginSchema;
