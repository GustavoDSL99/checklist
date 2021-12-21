import React, { useEffect, useState } from 'react';
import { DivCheck, DivCorpo, DivInferior, DivResposta, GridStyled } from './styles.module';
import { Typography } from '@material-ui/core';
import Header from '../../components/Header';
import { AxiosRequestConfig } from 'axios';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import { InterfaceCurrentIdChecklist } from '../../redux/IdChecklist';

interface Check {
  idCheck: string
  descricao: string
  resposta: boolean
}

interface Checklist {
  nome: string
  id: number | string
  checks: Array<Check>
}

interface ChecklistRespondido {
  nome: string
  checklistId: number | string
  idChecklistRespondido: string
  checks: Array<Check>
}

export function ChecklistRespondidoF() {

  const { id } = useSelector((state: InterfaceCurrentIdChecklist) => state.currentIdChecklist)

  const [checkRespondido, setCheckRespondido] = useState<ChecklistRespondido | any>();

  async function carregarChecks() {
    const response: AxiosRequestConfig = await api.get<Checklist[]>(`/historico/${localStorage.getItem("checklistRespondido")}
    `,);
    setCheckRespondido(response.data)
  }

  useEffect(() => {
    carregarChecks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <GridStyled container className="PaginaIncial-container">
      <Header rota="inicio" />
      <DivCorpo>
        <Typography className="Titulo">
          Checklist Respondido
        </Typography>
        {checkRespondido?.checks !== undefined && checkRespondido.checks.map((checkRespondidoMap: any) => (
          <DivCheck>{checkRespondidoMap.descricao}
            <DivInferior>
              <DivResposta>
                {checkRespondidoMap.resposta === false ? <div>Não</div> : <div>Sim</div>}
              </DivResposta>
            </DivInferior>
          </DivCheck>
        ))}
      </DivCorpo>
    </GridStyled>
  )
}

export default ChecklistRespondidoF;
