import { Grid } from '@material-ui/core';
import styled from 'styled-components'

export const GridStyled = styled(Grid)`

  .PaginaIncial-container.PaginaIncial-container {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .MuiButton-root{
    width: 120px;
    height: 40px;
    margin-right: 5px;
  }
`;

export const DivCorpo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  

  .divContent{
    background-color: yellow;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .titulo{
    margin-bottom: 60px;
    margin-top: 40px;
    font-weight: 500;
    font-size: 24px;
    color: #001147;
    text-align: center;
  }

  .MuiButton-root{
    height: 50px;
    margin-top: 58px;
  }


`;
