import React, { useEffect, useState } from 'react';
import { DivBotoes, DivCheck, DivCorpo, DivInferior, DivResposta, GridStyled } from './styles.module';
import { Button, Typography } from '@material-ui/core';
import Header from '../../components/Header';
import { AxiosRequestConfig } from 'axios';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import { InterfaceCurrentIdChecklist } from '../../redux/IdChecklist';
import { useHistory } from 'react-router';

interface Check {
  idCheck: string
  descricao: string
  resposta: boolean
}

interface ChecklistHistorico {
  nome: string
  checklistId: number | string
  id: number | string
  checks: Array<Check>
  data: string
}

export function ResponderChecklist() {

  const { id } = useSelector((state: InterfaceCurrentIdChecklist) => state.currentIdChecklist)
  const history = useHistory()
  const [checkRespondido, setCheckRespondido] = useState<ChecklistHistorico | any>();
  const current = new Date();
  const date = `${current.getMonth() + 1}-${current.getDate()}-${current.getFullYear()}`;


  async function carregarChecks() {
    const response: AxiosRequestConfig = await api.get<ChecklistHistorico[]>(`/checklist/${id}`,);
    setCheckRespondido(response.data)
  }



  function marcarSim(idCheck: any) {
    const perguntaSelecionada = checkRespondido?.checks.findIndex((obj: any) => obj.idCheck === idCheck)
    const updateFormulario = { ...checkRespondido?.checks[perguntaSelecionada!] }

    if (updateFormulario?.resposta === false) {

      const mudaResposta = { ...updateFormulario, resposta: true }

      const updateLista = [
        ...checkRespondido?.checks.slice(0, perguntaSelecionada!),
        mudaResposta,
        ...checkRespondido?.checks.slice(perguntaSelecionada! + 1)
      ]
      setCheckRespondido({ ...checkRespondido, checks: updateLista })
    }
  }

  function marcarNao(idCheck: any) {
    const perguntaSelecionada = checkRespondido?.checks.findIndex((obj: any) => obj.idCheck === idCheck)
    const updateFormulario = { ...checkRespondido?.checks[perguntaSelecionada!] }

    if (updateFormulario?.resposta === true) {

      const mudaResposta = { ...updateFormulario, resposta: false }

      const updateLista = [
        ...checkRespondido?.checks.slice(0, perguntaSelecionada!),
        mudaResposta,
        ...checkRespondido?.checks.slice(perguntaSelecionada! + 1)
      ]
      setCheckRespondido({ ...checkRespondido, checks: updateLista })
    }
  }

  useEffect(() => {
    carregarChecks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function enviaDados() {
    const body = {
      "data": date,
      "nome": checkRespondido.nome,
      "checks": checkRespondido.checks
    }
    await api.post(`/checklist/${id}/historico  `, body)
    history.push("/inicio")
  }

  return (
    <GridStyled container className="PaginaIncial-container">
      <Header rota="inicio" />
      <DivCorpo>
        <Typography className="Titulo">
          Responder Checklist
        </Typography>
        {checkRespondido?.checks !== undefined && checkRespondido.checks.map((check: any) => (
          <DivCheck>{check.descricao}
            <DivInferior>
              <DivResposta>
                {check.resposta === true ? <div>Sim</div> : <div>Nao</div>}
              </DivResposta>
              <DivBotoes>
                <Button className="Botao-sim" onClick={() => marcarSim(check.idCheck)}>Sim</Button>
                <Button className="Botao-nao" onClick={() => marcarNao(check.idCheck)}>Não</Button>
              </DivBotoes>
            </DivInferior>
          </DivCheck>
        ))}
        <Button onClick={enviaDados} className="Botao-Salvar">
          Salvar respostas
        </Button>
      </DivCorpo>
    </GridStyled>
  )
}

export default ResponderChecklist;
