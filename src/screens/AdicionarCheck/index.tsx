import React from 'react';
import { DivCorpo, GridStyled } from './styles.module';
import { Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import Input from '../../components/UnformComponents/Input';
import { AxiosResponse } from 'axios';
import api from '../../services/api';
import { activeCurrentIdChecklist } from '../../redux/IdChecklist/action';
import Header from '../../components/Header';

interface DadosChecklist {
  nome: string
  pergunta: string
}

export function AdicionarCheck() {
  const formRef = React.useRef<any | null>()
  const dispatch = useDispatch()
  const enviaDados = async (dados: DadosChecklist) => {
    if (dados.nome === null || dados.nome === '') {
      formRef.current.setFieldError("nome", "Nome do checklist não inserido")
    } else {
      const body = {
        "nome": dados.nome,
        // "perguntas": [
        //   {
        //     "idPergunta": getRandomInt(1, 1000),
        //     "descricao": dados.pergunta,
        //     "resposta": false
        //   }
        // ]
      }
      const resposta: AxiosResponse<any> = await api.post(`/checklist`, body)
      if (resposta?.status === 201) {
        dispatch(activeCurrentIdChecklist({
          id: resposta?.data?.id,
        }))
      }
    }
  }

  return (
    <GridStyled container className="PaginaIncial-container">
      <Header rota="inicio" />
      <DivCorpo>
        <Typography className="Titulo">
          Adicionar Check
        </Typography>
        <Form ref={formRef} onSubmit={enviaDados} className="Formulario">
          <Input name="nome" label="Nome do novo check" variant="outlined"></Input>
          <Button fullWidth type="submit" >Adicionar Check</Button>
        </Form>
      </DivCorpo>
    </GridStyled>
  )
}

export default AdicionarCheck;
