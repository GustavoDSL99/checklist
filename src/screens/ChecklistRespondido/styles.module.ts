import { Grid } from '@material-ui/core';
import styled from 'styled-components'

export const GridStyled = styled(Grid)`
  .PaginaIncial-container.PaginaIncial-container {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const DivCorpo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;  

  .Titulo{
    margin-bottom: 60px;
    margin-top: 40px;
    font-weight: 500;
    font-size: 24px;
    color: #001147;
    text-align: center;
  }
  .Botao-Salvar.MuiButton-root{
    max-width: 550px;
    width: 90%;
    height: 60px;
    margin-top: 10px;
    color: white;
    background-color: #001147;
  }
  
`;

export const DivCheck = styled.div`
  display: flex;
  border-radius: 10px;
  justify-content: start;
  width: 90%;
  max-width: 550px;
  color: #02226A;
  flex: 1;
  margin-top: 15px;
  padding: 0px  5px 5px 5px;
  border: 1px solid #02226A;
  flex-direction: column;
  
`;
export const DivInferior = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  display: flex;

`;
export const DivBotoes = styled.div`   
  display: flex;

  .MuiButton-root.Botao-sim{
    height: 40px;
    width: 80px;
    background-color: #61C662;
    color: white;
  }

  .MuiButton-root.Botao-nao{
    height: 40px;
    margin-left: 5px;
    width: 80px;
    background-color: #BB0A30;
    color: white;
  }
  `;

export const DivResposta = styled.div`
  //border: 3px solid orange;
  height: min-content;
`;
