import { CardActionArea } from '@material-ui/core'
import React from 'react'
import {
  BoxCorpo,
  Icone,
  BoxDeNomeEData,
  CardStyled,
  DataRespondido, NomeDoChecklist, IconeSeta
} from './styles.module'

interface Props {
  nome: string,
  data?: string,
  onClick?: any
}

export function CardParada(props: Props) {
  const { nome, data, onClick } = props

  return (
    <CardStyled>
      <CardActionArea onClick={onClick}>
        <BoxCorpo>
          <BoxDeNomeEData>
            <NomeDoChecklist>{nome}</NomeDoChecklist>
            <DataRespondido>{data}</DataRespondido>
          </BoxDeNomeEData>
          <Icone>
            <IconeSeta />
          </Icone>
        </BoxCorpo>
      </CardActionArea >
    </CardStyled >
  )
}

export default CardParada
