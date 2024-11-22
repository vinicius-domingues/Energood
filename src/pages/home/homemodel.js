// Modelo responsável pela autenticação
export const checkAuth = () => {
  const authToken = localStorage.getItem('authToken');
  const userId = localStorage.getItem('userId');
  return authToken || userId;
};
