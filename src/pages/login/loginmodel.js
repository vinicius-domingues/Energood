export const loginUser = async (id, senha) => {
  if (id === '' || senha === '') {
    throw new Error('ID e senha são obrigatórios!');
  }

  const response = await fetch('http://backend:3000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, senha }), 
  });

  if (!response.ok) {
    throw new Error('Credenciais inválidas');
  }

  const data = await response.json();
  if (data.token) {
    // Store authentication details in localStorage
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('idUser', data.id);
    localStorage.setItem('username', data.username);
  }

  return data;
};
