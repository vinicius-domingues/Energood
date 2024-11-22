const API_URL = 'http://localhost:3000/users';

export const fetchUserPreferences = async (idUser, authToken) => {
  try {
    const response = await fetch(`${API_URL}/${idUser}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error('Erro ao carregar as preferências:', error);
    throw error;
  }
};

export const updateUserPreferences = async (idUser, authToken, updatedPreferences) => {
  try {
    const response = await fetch(`${API_URL}/${idUser}/preferences`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(updatedPreferences),
    });
    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar preferências:', error);
    throw error;
  }
};
