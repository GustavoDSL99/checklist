import { Box, Card, Typography } from '@material-ui/core';
import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

interface Props {
  backgroundcolor?: string
  textcolor?: string
}


export const CardStyled = styled(Card)`
  &.MuiCard-root{
    display: flex;
    margin: 8px 0px 0px 0px;
    width: 100%;
    background-color: "#FFFFFF";
    border-radius: 16px;
    border: 1px solid rgba(13, 71, 161, 0.18);
    box-shadow: none;
  }
`;

export const BoxCorpo = styled(Box)`
  &.MuiBox-root{
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
  }
`;

export const BoxDeNomeEData = styled(Box)`
  &.MuiBox-root{
    margin: 0px 0px 0px 5px;
    flex-direction: column;
    width: 100%;
    display: flex;
  }
`;

export const NomeDoChecklist = styled(Typography)`
  &.MuiTypography-root{
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 300;
    color: ${(props: Props) => props.textcolor}; ;
    font-style: normal;
    line-height: 19.04px;
  }
`;

export const DataRespondido = styled(Typography)`
&.MuiTypography-root{
    margin-bottom: 16px;
    font-size: 12px;
    font-weight: 400;
    color: ${(props: Props) => props.textcolor}; ;
    font-style: normal;
    line-height: 14.4px;
}
`;

export const Icone = styled(Box)`
  &.MuiBox-root{
    min-width: 30px;
    display: flex;
    align-items: center;
  }
`;

export const IconeSeta = styled(ArrowForwardIosIcon)`
  &.MuiSvgIcon-root{
    width: 14px;
    color: #1F2933;

  }
`
