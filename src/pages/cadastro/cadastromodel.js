// model/Usuario.js

export const cadastrarUsuario = async (username, senha, nome) => {
  try {
    const response = await fetch('http://localhost:3000/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, senha, nome }),
    });

    if (response.ok) {
      return await response.json(); // Retorna os dados caso a requisição tenha sido bem-sucedida
    } else {
      throw new Error('Falha ao cadastrar');
    }
  } catch (error) {
    throw error;
  }
};
