import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const BoxHeader = styled(Box)`
  width: 100%;
  border-bottom: 1px solid #C6D9E3;
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 57px;
  margin-left: 3px;
  margin-right: 3px;

  .Botao-Voltar{
    height: 26px;
    width: 26px;
    color: #043D94;
  }
  .Menu-Drawer{
    height: 26px;
    width: 26px;
    color: #043D94;
  }
  .Div-Invisivel-Auxiliar{
    width: 45px;
    height: 10px;
  }
`;

export const DivLogo = styled.div`
  width: 28px;
  height: 28px;
  margin-top: 10px;
  margin-right: 3px;
`;
