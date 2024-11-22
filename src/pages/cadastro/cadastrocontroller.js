// controller/CadastroController.js

import { cadastrarUsuario } from '../model/Usuario';

export const handleCadastro = async (username, senha, nome, setErrorMessage) => {
  if (username === '' || senha === '' || nome === '') {
    setErrorMessage('ID, Senha e Nome são obrigatórios!');
    return;
  }

  try {
    await cadastrarUsuario(username, senha, nome);
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  } catch (error) {
    setErrorMessage(error.message);
  }
};
