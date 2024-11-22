import React, { useEffect, useState } from 'react'; 
import { FaUser } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom'; 
import './loginStatus.css'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
    if (authToken || userId) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogoClick = () => {
    navigate('/'); 
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/'); 
  };

  return (
    <header className="home-header">
      <h1 className="logo" onClick={handleLogoClick}>ENERGOOD</h1>

      {isLoggedIn ? (
        <span onClick={handleLogout} className="login-link" style={{color:'#FFC2C2', fontWeight:'bold'}}>
          SAIR <FaUser className="user-icon" />
        </span>
      ) : (
        <Link to="/login" className="login-link">
          ENTRAR
        </Link>
      )}
    </header>
  );
};

export default Header;
