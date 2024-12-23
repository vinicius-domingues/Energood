import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './recargas.css';
import Header from '../../components/loginStatus';

const MinhasRecargas = () => {
    const [recargas, setRecargas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const fetchRecargas = () => {
        const idUser = localStorage.getItem('idUser'); 
        const authToken = localStorage.getItem('authToken'); 
      
        if (!idUser || !authToken) {
          console.error('ID do usuário ou token não encontrados no localStorage.');
          setLoading(false);
          return;
        }
      
        fetch(`http://localhost:3000/recargas/${idUser}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`, 
          },
        })
          .then((response) => {
            if (!response.ok) {
              return response.text().then((error) => {
                throw new Error(`Erro ao buscar recargas: ${error}`);
              });
            }
            return response.json();
          })
          .then((data) => {
            setRecargas(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Erro ao buscar recargas:', error.message);
            setLoading(false);
          });
      };

    useEffect(() => {
        fetchRecargas();
    }, []);

    const handleIncluir = () => {
        navigate('/recargas/incluir');
    };

    const calculateCarregando = (horaInicio, dataInicio) => {
        // Mapeamento das horas baseadas no número de hora
        const horaInicioMap = {
            1: "12:00",
            2: "13:00",
            3: "14:00",
            4: "15:00",
            5: "16:00",
            6: "17:00",
            7: "18:00",
            8: "19:00",
            9: "20:00",
            10: "21:00",
            11: "22:00",
            12: "23:00",
            13: "00:00",
            14: "01:00",
            15: "02:00",
            16: "03:00",
            17: "04:00",
            18: "05:00",
            19: "06:00",
            20: "07:00",
            21: "08:00",
            22: "09:00",
            23: "10:00",
            24: "11:00",
        };
    
        // A data e hora atual
        const agora = new Date();
        // Pegando a hora formatada do mapeamento
        const horaInicioFormatted = horaInicioMap[horaInicio];
    
        console.log("horaInicioFormatted: ", horaInicioFormatted);
        console.log("agora: ", agora);
        console.log("dataInicio: ", dataInicio);
    
        // Desestruturando a dataInicio para pegar ano, mês e dia
        const [ano, mes, dia] = dataInicio.split('-');
        
        // Formando a nova data com a hora formatada (data sem hora inicial)
        const dataExataInicio = new Date(`${ano}-${mes}-${dia}T${horaInicioFormatted}:00`);
    
        console.log("dataExataInicio: ", dataExataInicio);
    
        // Calculando a diferença em milissegundos entre agora e dataExataInicio
        const diffInMs = agora - dataExataInicio;
    
        // Calculando as horas e minutos
        const horas = Math.floor(diffInMs / (1000 * 60 * 60)); // Convertendo para horas inteiras
        const minutos = Math.floor((diffInMs / (1000 * 60)) % 60); // Convertendo para minutos restantes
    
        console.log(`Diferença: ${horas} horas e ${minutos} minutos`);
    
        // Definindo a porcentagem com base na diferença de horas
        let porcentagem = 0;
        if (horas <= 2) {
            porcentagem = 20;
        } else if (horas <= 4) {
            porcentagem = 40;
        } else if (horas <= 6) {
            porcentagem = 60;
        } else if (horas <= 8) {
            porcentagem = 80;
        } else if (horas <= 10) {
            porcentagem = 99;
        } 
    
        // Retornando a porcentagem, horas, minutos e a data de início exata
        return { porcentagem, horas, minutos, dataExataInicio };
    };

    const formatDataInicio = (dataInicio, horaInicio) => {
        const date = new Date(`${dataInicio}T${horaInicio}`);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} às ${hours}:${minutes}`;
    };

    const formatDate = (data) => {
        const date = new Date(data);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} às ${hours}:${minutes}`;
    };

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <div className="recargas-container">
                <div className="header">
                    <h2>MINHAS RECARGAS</h2>
                    <button className="btn-incluir" onClick={handleIncluir}>INCLUIR</button>
                </div>

                {loading ? (
                    <div className="loading">CARREGANDO . . .</div>
                ) : (
                    <div className="recargas-list">
                        {recargas.map((recarga) => {
                            const { porcentagem, horas } = calculateCarregando(recarga.horaInicio, recarga.dataInicio);

                            const carregandoText = horas < 0
                            ? `CARREGAMENTO AGENDADO (${porcentagem}%)`
                            : porcentagem === 100
                              ? 'CARREGADO (100%)'
                              : `CARREGANDO (${porcentagem}%)`;

                            return (
                                <div key={recarga.id} className="recarga-card">
                                    <div className="recarga-info">
                                        <div className="carregando">
                                            <p>{carregandoText}</p>
                                        </div>

                                        <h3>{recarga.nomeCarro}</h3>
                                        <p style={{ paddingLeft: '20px', paddingTop: '20px', color: '#808080' }}>
                                            <strong>Início da recarga: </strong>
                                            <span style={{ color: '#B6B6B6' }}>
                                                {formatDate(recarga.dataInicio)}
                                            </span>
                                        </p>

                                        <p style={{ paddingLeft: '20px', paddingTop: '5px', color: '#808080' }}>
                                            <strong>Fonte da energia na recarga: </strong> 
                                            <span style={{ color: '#B6B6B6' }}>
                                                {
                                                    recarga.tipoRecarga === 1 ? 'Elétrica proveniente de painel solar' :
                                                    recarga.tipoRecarga === 2 ? 'Elétrica proveniente de eólica' :
                                                    recarga.tipoRecarga === 3 ? 'Elétrica proveniente de hidrelétrica' :
                                                    recarga.tipoRecarga === 4 ? 'Solar direta' :
                                                    'Sistema Smart Grid'
                                                }
                                            </span>
                                        </p>

                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar-inner"
                                                style={{ width: `${porcentagem}%`, backgroundColor: '#458D16' }}
                                            ></div>
                                        </div>
                                        <div className="progress-info" style={{ padding: '5px', border: '1px solid green' }}>
                                            <span style={{ padding: '15px', color: 'red' }}>0%</span>
                                            <span style={{ paddingRight: '20px', color: 'green', float: 'right' }}>100%</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default MinhasRecargas;
