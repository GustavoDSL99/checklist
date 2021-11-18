import { FormControl } from '@material-ui/core';
import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;

  .TextField {
    width: 25ch;
  }

  .Margin {
    margin: 16px;
  }
`

export const FormControlStyled = styled(FormControl)`
  .Icone-Visualizar.MuiSvgIcon-root {
    color: #BB0A30;
  }
`;


export const DivErro = styled.div`
  display: flex;
  align-items: center;

  .Icone-Input-Error{
    font-size: 14px;
    margin-right: 3px;
    color: #BB0A30;
  }
  .Input-Error{
    font-size: 14px;
    font-weight: 300;
    color: #BB0A30;
  } 
`
