import React, { useState } from 'react';
import './cadastro.css';
import energoodThunder2 from '../../assets/energoodThunder2.png';
import { Link } from 'react-router-dom';

const CadastroView = () => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const displayErrorMessage = (message) => {
    setErrorMessage(message);
  };

  const handleCadastrar = async () => {
    console.log('Iniciando cadastro...');
    console.log({ username, senha, nome });

    if (username === '' || senha === '' || nome === '') {
      displayErrorMessage('ID, Senha e Nome são obrigatórios!');
      return;
    }

    const response = await fetch('http://localhost:3000/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, senha }),
    });

    console.log('Requisição feita');

    if (response.ok) {
      const data = await response.json();

      setTimeout(() => {
        window.location.href = '/login';
      }, 1000);
    } else {
      console.log(`Falha ao cadastrar: ${response.statusText}`);
    }
  };

  const handleVoltar = () => {
    window.location.href = '/login';
  };

  return (
    <div className="cadastro-container">
      <div className="left-side">
        <div className="cadastro-box">
          <div className="cadastro-conteudo">
            <h2>CADASTRAR</h2>
            <div className="form-camps">
              <div className="form-group">
                <label>ID</label>
                <input
                  type="text"
                  id="id"
                  placeholder="Digite seu ID"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
              <div className="form-group">
                <label>NOME</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
            </div>

            <div className="buttons">
              <button className="btn-voltar" onClick={handleVoltar}>
                VOLTAR
              </button>
              <button className="btn-cadastrar" onClick={handleCadastrar}>
                CADASTRAR
              </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
      <div className="right-side">
        <Link to={'/'} style={{ margin: '0px', padding: '0px' }}>
          <img src={energoodThunder2} alt="Imagem de fundo" className="background-image" />
        </Link>
      </div>
    </div>
  );
};

export default CadastroView;
