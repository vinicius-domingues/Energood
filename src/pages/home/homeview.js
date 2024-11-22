import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeController from './homecontroller';
import './home.css';
import Header from '../../components/loginStatus';

const HomeView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
    if (authToken || userId) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">

      <Header isLoggedIn={isLoggedIn} />

      <main className="home-main">

        <div
          className="card energia-card"
          onClick={() => handleCardClick('/fontesdeenergia')}
        >
          FONTES DE ENERGIA
        </div>

        {isLoggedIn && (
          <>

            <div
              className="card recargas-card"
              onClick={() => handleCardClick('/recargas')}
            >
              MINHAS RECARGAS
            </div>

            <div
              className="card preferencias-card"
              onClick={() => handleCardClick('/preferencias')}
            >
              MINHAS PREFERÊNCIAS
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default HomeView;
