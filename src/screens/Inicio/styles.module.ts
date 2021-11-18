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

  .MuiButton-root{
    border: 2px solid blue;
    height: 50px;
    margin-top: 15px;
  }


`;
