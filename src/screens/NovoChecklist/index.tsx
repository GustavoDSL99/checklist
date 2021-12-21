import React from 'react';
import { DivCorpo, GridStyled } from './styles.module';
import { Form } from '@unform/web'
import Input from '../../components/UnformComponents/Input';
import api from '../../services/api';
import { useDispatch } from 'react-redux';
import { activeCurrentIdChecklist } from '../../redux/IdChecklist/action';
import { AxiosResponse } from 'axios';
import { Button, Typography } from '@material-ui/core';
import Header from '../../components/Header';

interface DadosChecklist {
  nome: string
  pergunta: string
}

export function NovoChecklist() {
  const formRef = React.useRef<any | null>()
  const dispatch = useDispatch()
  const enviaDados = async (dados: DadosChecklist) => {
    if (dados.nome === null || dados.nome === '') {
      formRef.current.setFieldError("nome", "Nome do checklist não inserido")
    } else {
      const body = {
        "nome": dados.nome,
        "checks": [
          // {
          //   "idCheck": getRandomInt(1, 9999),
          //   "descricao": dados.pergunta,
          //   "resposta": false
          // }
        ]
      }
      const resposta: AxiosResponse<any> = await api.post(`/checklist`, body)
      if (resposta?.status === 201) {
        dispatch(activeCurrentIdChecklist({
          id: resposta?.data?.id,
        }))
        //history.push("/adicionarcheck")
      }
    }
  }

  return (
    <GridStyled container className="PaginaIncial-container">
      <Header rota="inicio" />
      <DivCorpo>
        <Typography className="Titulo">
          Novo Checklist
        </Typography>
        <Form ref={formRef} onSubmit={enviaDados} className="Formulario">
          <Input name="nome" label="Nome do Checklist" variant="outlined"></Input>
          <Button fullWidth type="submit" >Novo checklist</Button>
        </Form>
      </DivCorpo>
    </GridStyled>
  )
}

export default NovoChecklist;
