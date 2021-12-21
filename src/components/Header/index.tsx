import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { IconButton } from "@material-ui/core";
import React from "react";
import { BoxHeader } from "./styles.module";
import { useHistory } from "react-router-dom";

type Props = {
  rota?: "novochecklist" | "adicionarcheck" | "responderchecklist" | "inicio";
}

export function Header({ rota, ...rest }: Props) {
  const history = useHistory()

  return (

    <BoxHeader>
      <IconButton onClick={() => history.push(`/${rota}`)}>
        <KeyboardArrowLeftIcon className="Botao-Voltar" />
      </IconButton>
      <div className="Div-Invisivel-Auxiliar" />
    </BoxHeader>
  )
}

export default Header;
