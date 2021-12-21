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

  .Formulario{
    width: 90%;
    max-width: 550px;
  }
  .MuiButton-root{
    //color: white;
    background-color: #02226A;
    height: 40px;
    margin-top: 40px;
  }
`;