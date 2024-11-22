import React, { useState } from 'react';

import { loginUser } from './authModel';

const LoginController = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const displayErrorMessage = (message) => {
    setErrorMessage(message);
  };

  const handleLogin = async (id, senha) => {
    try {
      await loginUser(id, senha);
      // If login is successful, redirect to homepage
      window.location.href = '/';
    } catch (error) {
      displayErrorMessage(error.message);
    }
  };


};

export default LoginController;
