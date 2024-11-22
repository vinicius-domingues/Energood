import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeView from '../pages/home/homeview';
import LoginView from '../pages/login/loginview';
import FontesDeEnergiaView from '../pages/fontesdeenergia/fontesdeenergiaview';

// Outros componentes comentados que podem ser descomentados conforme necessário
import CadastroView from '../pages/cadastro/cadastroview';
import RecargasView from '../pages/recargas/recargasview';
import IncluirRecargaView from '../pages/recargas/incluiRecargas/incluiRecargasview';
import PreferenciasView from '../pages/preferencias/preferenciasview';
// import PreferenciasEditarView from '../pages/preferencias/preferenciaseditarview';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/fontesdeenergia" element={<FontesDeEnergiaView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/cadastro" element={<CadastroView />} />
      <Route path="/recargas" element={<RecargasView />} />
      <Route path="/recargas/incluir" element={< IncluirRecargaView />} />
      <Route path="/preferencias" element={<PreferenciasView />} />
      
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
};

export default AppRoutes;
