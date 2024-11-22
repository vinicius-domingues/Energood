import React, { useState } from 'react';
import './login.css';
import energoodThunder from '../../assets/energoodThunder.png';
import { Link } from 'react-router-dom';

const LoginView = () => {
  const [id, setId] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const displayErrorMessage = (message) => {
    setErrorMessage(message);
  };

  const handleCadastro = () => {
    window.location.href = '/cadastro';
  };

  const handleEntrar = () => {
    if (id === '' || senha === '') {
      displayErrorMessage('ID e senha são obrigatórios!');
      return;
    }
  
    const username = id;
  
    const login = JSON.stringify({ username, senha });
  
    console.log("Ao login: ", login);
  
    fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: login,
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((error) => {
            throw new Error(`Erro no login: ${response.status} - ${error}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Token:", data, data.token);
  
        if (data.token) {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('idUser', data.id);
          localStorage.setItem('username', data.username);
  
          console.log('Token armazenado com sucesso');
  
          window.location.href = '/';
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error.message);
      });
  };
  

  return (
    <div className="login-container">
      <div className="left-side">
        <Link to={'/'}><img src={energoodThunder} alt="Imagem de fundo" className="background-image" /></Link>
      </div>
      <div className="right-side">
        <div className="login-box">
          <div className="login-conteudo">
            <h2>LOGIN</h2>
            <div className="form-camps">
              <div className="form-group">
                <label>ID</label>
                <input
                  type="text"
                  id="id"
                  placeholder="Digite seu ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>SENHA</label>
                <input
                  type="password"
                  id="senha"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
            </div>

            <div className="buttons">
              <button className="btn-cadastrar" onClick={handleCadastro}>CADASTRAR</button>
              <button className="btn-entrar" onClick={handleEntrar}>ENTRAR</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
