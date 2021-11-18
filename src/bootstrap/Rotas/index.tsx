import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Formulario from '../../screens/Formulario';
import Inicio from '../../screens/Inicio';
import NovaTarefa from '../../screens/NovaTarefa';

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/novatarefa" element={<NovaTarefa />} />
      </Routes>
    </>
  )
};

export default Rotas;
