import React, { useState } from 'react';
import Header from '../../../components/loginStatus';

const IncluirRecargaView = () => {
  const [nomeCarro, setNomeCarro] = useState('');
  const [tipoRecarga, setTipoRecarga] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const dataInicio = new Date().toISOString().split('T')[0];
  let idUser = localStorage.getItem('idUser'); // Alterado para let para permitir reatribuição

  const salvarRecarga = async () => {
    if (!nomeCarro || !tipoRecarga || !horaInicio) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    idUser = Number(idUser); // Convertendo para inteiro

    const novaRecarga = {
      horaInicio: parseInt(horaInicio),
      nomeCarro,
      tipoRecarga,
      idUser
    };

    console.log("Pré ida: ", novaRecarga);

    const authToken = localStorage.getItem('authToken'); 

    fetch('http://localhost:3000/recargas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(novaRecarga),
    })
      .then((response) => {
        if (response.ok) {
          alert('Recarga salva com sucesso!');
          window.location.href = '/recargas';
        }
      });
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>MINHAS RECARGAS &gt; INCLUIR</h2>
          <button
            onClick={salvarRecarga}
            style={{
              padding: '10px 20px',
              backgroundColor: '#458D16',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              maxWidth:'100px'
            }}
          >
            SALVAR
          </button>
        </header>

        <main style={{ marginTop: '40px'}}>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '550px'}}>
            <label style={{fontSize:'18px', fontWeight:'bold', marginBottom:'20px', paddingBottom:'5px'}}>
              NOME DO CARRO
              <input
                type="text"
                value={nomeCarro}
                placeholder="Digite o nome do carro elétrico a ser carregado"
                onChange={(e) => setNomeCarro(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '20px',
                  border: '1px solid #ccc',
                  backgroundColor:'#D9D9D9',
                  fontSize:'15px'
                }}
              />
            </label>

            <label style={{fontSize:'18px', fontWeight:'bold', marginBottom:'20px'}}>
              FONTE DA RECARGA
              <select
                value={tipoRecarga}
                onChange={(e) => setTipoRecarga(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '20px',
                  border: '1px solid #ccc',
                  backgroundColor:'#D9D9D9',
                  fontSize:'15px'
                }}
              >
                <option value="">Selecione a fonte para a recarga</option>
                <option value="1">Elétrica proveniente de painel solar</option>
                <option value="2">Elétrica proveniente de eólica</option>
                <option value="3">Elétrica proveniente de hidrelétrica</option>
                <option value="4">Solar direta</option>
                <option value="5">Sistema Smart Grid</option>
              </select>
            </label>

            <label style={{fontSize:'18px', fontWeight:'bold'}}>
              HORÁRIO INICIAL
              <select
                value={horaInicio}
                onChange={(e) => setHoraInicio(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '20px',
                  border: '1px solid #ccc',
                  backgroundColor:'#D9D9D9',
                  fontSize:'15px'
                }}
              >
                <option value="">Selecione o horário inicial da recarga</option>
                <option value="1">12:00</option>
                <option value="2">13:00</option>
                <option value="3">14:00</option>
                <option value="4">15:00</option>
                <option value="5">16:00</option>
                <option value="6">17:00</option>
                <option value="7">18:00</option>
                <option value="8">19:00</option>
                <option value="9">20:00</option>
                <option value="10">21:00</option>
                <option value="11">22:00</option>
                <option value="12">23:00</option>
                <option value="13">00:00</option>
                <option value="14">01:00</option>
                <option value="15">02:00</option>
                <option value="16">03:00</option>
                <option value="17">04:00</option>
                <option value="18">05:00</option>
                <option value="19">06:00</option>
                <option value="20">07:00</option>
                <option value="21">08:00</option>
                <option value="22">09:00</option>
                <option value="23">10:00</option>
                <option value="24">11:00</option>
              </select>
            </label>
          </div>
        </main>
      </div>
    </>
  );
};

export default IncluirRecargaView;
