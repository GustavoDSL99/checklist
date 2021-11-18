import React from 'react';
import { Header } from '../../components/Header';
import { DivCorpo, GridStyled } from './styles.module';
import { Button } from '@material-ui/core';

export function NovaTarefa() {
  return (
    <GridStyled container className="PaginaIncial-container">
      <Header botao="drawer" />
      <DivCorpo>
        <Button onClick={() => window.location.href = "/"} color="primary" variant="contained">Voltar</Button>
      </DivCorpo>
    </GridStyled>
  )
};

export default NovaTarefa;
