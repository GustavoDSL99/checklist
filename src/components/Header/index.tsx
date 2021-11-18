import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { Button, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";
import { BoxHeader } from "./styles.module";

type Props = {
  botao?: "drawer" | "voltar";
}

export function Header({ botao, ...rest }: Props) {
  return (

    <BoxHeader>
      {botao === "drawer" ?
        <IconButton>
          <MenuIcon className="Menu-Drawer" />
        </IconButton>
        : botao === "voltar" ?
          <IconButton>
            <KeyboardArrowLeftIcon className="Botao-Voltar" />
          </IconButton>
          : <div className="Div-Invisivel-Auxiliar" />
      }
      <Button fullWidth onClick={() => window.location.href = "/novatarefa"} type="submit" color="primary" variant="contained">nova tarefa</Button>
    </BoxHeader>
  )
}

export default Header;
