import React from 'react';
import { Header } from '../../components/Header';
import { DivCorpo, GridStyled } from './styles.module';
import { Form } from '@unform/web'
import Input from '../../components/UnformComponents/Input';
import { Button } from '@material-ui/core';
import api from '../../services/api';

interface DadosFormulario {
  nome: string
  pergunta: string
}

export function Inicio() {
  const formRef = React.useRef<any | null>()
  const [idPergunta, setIdPergunta] = React.useState(1)

  const enviaDados = async (dados: DadosFormulario) => {
    const body = {
      "nome": dados.nome,
      "perguntas": [
        {
          "idPergunta": idPergunta,
          "descricao": dados.pergunta,
          "resposta": false
        }
      ]
    }
    const resposta = await api.post(`/formulario`, body)
    console.log(resposta)
    if (resposta.status === 201) {
      setIdPergunta(idPergunta + 1)
      window.location.href = "/formulario"
    }
  }

  return (
    <GridStyled container className="PaginaIncial-container">
      <Header botao="drawer" />
      <DivCorpo>
        <Form ref={formRef} onSubmit={enviaDados}>
          <Input name="nome" label="Nome do Questionário" variant="outlined"></Input>
          <Input name="pergunta" label="Primeira pergunta" variant="outlined"></Input>
          <Button type="submit" >Criar questionário</Button>
        </Form>
      </DivCorpo>
    </GridStyled>
  )
}

export default Inicio;
