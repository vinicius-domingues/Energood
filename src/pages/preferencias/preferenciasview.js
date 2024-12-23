import React, { useState, useEffect } from 'react';
import Header from '../../components/loginStatus';

const Preferencias = () => {
  const [userPreferences, setUserPreferences] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [preferenciaTipoRecarga, setPreferenciaTipoRecarga] = useState('');
  const [preferenciaHorario, setPreferenciaHorario] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tempPreferenciaTipoRecarga, setTempPreferenciaTipoRecarga] = useState('');
  const [tempPreferenciaHorario, setTempPreferenciaHorario] = useState('');

  let idUser = localStorage.getItem('idUser');

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      fetch(`http://localhost:3000/users/${idUser}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          const currentUser = Array.isArray(data)
            ? data.find(user => user.id === Number(idUser))
            : data;

          if (currentUser) {
            setUserPreferences(currentUser);
            setPreferenciaTipoRecarga(currentUser.preferenciaTipoRecarga);
            setPreferenciaHorario(currentUser.preferenciaHorario);
            setTempPreferenciaTipoRecarga(currentUser.preferenciaTipoRecarga);
            setTempPreferenciaHorario(currentUser.preferenciaHorario);
          }
        })
        .catch(error => console.error('Erro ao carregar as preferências:', error));
    }
  }, [idUser]);

  const horarioMap = {
    1: '12:00',
    2: '13:00',
    3: '14:00',
    4: '15:00',
    5: '16:00',
    6: '17:00',
    7: '18:00',
    8: '19:00',
    9: '20:00',
    10: '21:00',
    11: '22:00',
    12: '23:00',
    13: '00:00',
    14: '01:00',
    15: '02:00',
    16: '03:00',
    17: '04:00',
    18: '05:00',
    19: '06:00',
    20: '07:00',
    21: '08:00',
    22: '09:00',
    23: '10:00',
    24: '11:00',
  };

  const tipoRecargaMap = {
    1: 'Elétrica proveniente de painel solar',
    2: 'Elétrica proveniente de eólica',
    3: 'Elétrica proveniente de hidrelétrica',
    4: 'Solar direta',
    5: 'Sistema Smart Grid',
  };

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleSaveClick = () => {
    const updatedPreferences = {
      preferenciaTipoRecarga: tempPreferenciaTipoRecarga,
      preferenciaHorario: parseInt(tempPreferenciaHorario),
    };

    const authToken = localStorage.getItem('authToken');

    fetch(`http://localhost:3000/users/${idUser}/preferences`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(updatedPreferences),
    }).then(() => {
      setPreferenciaTipoRecarga(tempPreferenciaTipoRecarga);
      setPreferenciaHorario(tempPreferenciaHorario);
      setIsEditing(false);
    });
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="preferencias-container">
        <div className="header" style={{ margin: '30px' }}>
          <h2>MINHAS PREFERÊNCIAS</h2>
          <button className="btn-incluir" onClick={handleEditClick}>
            EDITAR
          </button>
        </div>

        {userPreferences && (
          <div className="preferencias-content">
            <p style={{ marginLeft: '30px', marginBottom: '15px' }}>
              HORÁRIO PADRÃO SUGERIDO: <b>{horarioMap[preferenciaHorario]}</b>
            </p>
            <p style={{ marginLeft: '30px', marginBottom: '150px' }}>
              ORIGEM PADRÃO DA FONTE SUGERIDA: <b>{tipoRecargaMap[preferenciaTipoRecarga]}</b>
            </p>
          </div>
        )}

        {isEditing && (
          <>
            <div className="overlay" onClick={() => setIsEditing(false)}></div>
            <div className="preferencias-edit-popup">
              <div className="input-group">
                <label htmlFor="preferenciaHorario" style={{ color: 'green', fontWeight: 'bold', marginLeft: '30px', marginBottom:'30px', paddingTop: '15px' }}>
                  NOVO HORÁRIO PADRÃO
                </label>
                <select
                  id="preferenciaHorario"
                  value={tempPreferenciaHorario}
                  onChange={e => setTempPreferenciaHorario(parseInt(e.target.value))}
                >
                  {Object.entries(horarioMap).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
                {<p style={{color:'white'}}>.</p>}
              <div className="input-group" style={{ gap: '100px' }}>
                <label
                  htmlFor="preferenciaTipoRecarga"
                  style={{ color: 'green', fontWeight: 'bold', marginLeft: '30px', marginTop: '1rem', paddingTop: '1rem' }}
                >
                  NOVA ORIGEM PADRÃO DA FONTE
                </label>
                <select
                  id="preferenciaTipoRecarga"
                  value={tempPreferenciaTipoRecarga}
                  onChange={e => setTempPreferenciaTipoRecarga(e.target.value)}
                >
                  {Object.entries(tipoRecargaMap).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <button className="btn-incluir" style={{ marginLeft: '30px', marginTop: '30px' }} onClick={handleSaveClick}>
                SALVAR
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Preferencias;
