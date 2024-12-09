export const isValidEmail = (email: string): boolean => {
  // Expressão regular para verificar se o email tem o formato correto (ex: exemplo@dominio.com)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Testa o email com a expressão regular e retorna verdadeiro se for válido
  return emailRegex.test(email);
};

// valida a senha 
export const isStrongPassword = (password: string): boolean => {
  
  const passwordRegex = /^\d{8,}$/; {/*^:Começo,\d:qualquer dígito(de 0 a 9),{8,}:"pelo menos 8 caracteres",($):"Fim" */}
  // Testa a senha com a expressão regular e retorna verdadeiro se for forte o suficiente
  return passwordRegex.test(password);
};

// Função que verifica se o valor de um campo não está vazio
export const isNotEmpty = (value: string): boolean => {
  // Verifica se o valor, após remover espaços em branco no início e no fim, tem mais de 0 caracteres
  return value.trim().length > 0;
};
