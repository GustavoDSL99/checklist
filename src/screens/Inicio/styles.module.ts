import { Box, Grid, Tab, Tabs } from '@material-ui/core';
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
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .Botao-Checklist.MuiButton-root{
    max-width: 550px;
    width: 90%;
    height: 60px;
    margin-top: 10px;
    border: 1px solid #001147;
  }  
`;

export const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
    width: 100%;
    min-height: 22px;
    margin: 20px 0px 0px 0px;
    padding: 0px 23px 0px 23px;
  }
`

export const StyledTab = styled(Tab)`

  &.MuiTab-root {
    min-height: 24px;
  }

  &.MuiButtonBase-root {
    padding: 0px;
    height: 24px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 136%;
    color: #001147;
  }
  .MuiTab-wrapper {
    border-bottom: 2px solid #C6D9E3;
  }
`

export const ContentTab = styled(Box)`
  &.MuiBox-root {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px 24px 0px 24px;
    width: 100%;
    height: 90%;
  }
  &.MuiBox-root::-webkit-scrollbar {
    display: none;
  }
`

export const Teste = styled(Box)`
&.MuiBox-root {
  width: 100%;
  height: 100%;
}
&.MuiBox-root::-webkit-scrollbar {
  display: none;
}
`
export const BotaoNovoChecklist = styled(Box)`
&.MuiBox-root {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 24px 0px 24px 0px;
  overflow: auto;
  width: 100%;
}
&.MuiBox-root::-webkit-scrollbar {
  display: none;
}
`
