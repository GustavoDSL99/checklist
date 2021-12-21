import React, { useEffect, useState } from 'react';
import { BotaoNovoChecklist, ContentTab, DivCorpo, GridStyled, StyledTab, StyledTabs, Teste } from './styles.module';
import api from '../../services/api';
import { AxiosRequestConfig } from 'axios';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { activeCurrentIdChecklist } from '../../redux/IdChecklist/action';
import { useHistory } from 'react-router';
import CardParada from '../../components/CardParadas';
import { InterfaceTabCorrente } from '../../redux/TabCorrente';
import { tabCorrenteAtiva } from '../../redux/TabCorrente/action';

interface DadosChecklist {
  nome: string
}

interface ListaChecklist {
  lista: Array<DadosChecklist>
}

interface ChecklistHistorico {
  data: string
  nome: string
  id: string
}

function tabCorrenteAtual(index: any) {
  return {
    valor: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export function Inicio() {

  const [checklists, setChecklists] = useState<DadosChecklist[]>([]);
  const [historicoChecklist, setHistoricoChecklist] = useState<ChecklistHistorico | any>();
  const { numeroTab } = useSelector((state: InterfaceTabCorrente) => state.tabCorrente)
  const dispatch = useDispatch()
  const history = useHistory()

  const abrirChecklist = (id: number) => {
    dispatch(activeCurrentIdChecklist({
      id: id,
    }))
    history.push("/responderchecklist")
  }

  const abrirChecklistRespondido = (id: string) => {
    localStorage.setItem("checklistRespondido", id)
    dispatch(activeCurrentIdChecklist({
      id: id,
    }))
    history.push("/checklistrespondido")
  }

  async function carregarHistoricoDeChecklists() {
    const response: AxiosRequestConfig = await api.get<ChecklistHistorico[]>(`/historico`,);
    setHistoricoChecklist(response.data);
  }

  async function carregarChecklists() {
    const response: AxiosRequestConfig = await api.get<ListaChecklist[]>(`/checklist`,);
    setChecklists(response.data);
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    let tab = { numeroTab: newValue }
    dispatch(tabCorrenteAtiva(tab))
  }

  useEffect(() => {
    carregarChecklists()
    carregarHistoricoDeChecklists()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <GridStyled container className="PaginaIncial-container">
      <Header rota="inicio"></Header>
      <DivCorpo>
        <Teste>
          <StyledTabs
            value={numeroTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            centered
            variant="fullWidth"
          >
            <StyledTab label={"Checklists"} {...tabCorrenteAtual(0)} />
            <StyledTab label={"Historico"} {...tabCorrenteAtual(1)} />
          </StyledTabs>
          <ContentTab
            hidden={numeroTab !== 0}
            id={`painel-${0}`}>
            {checklists !== undefined && checklists.map((checklistMap: any) => (
              <CardParada
                onClick={() => abrirChecklist(checklistMap.id)}
                key={checklistMap.id}
                nome={checklistMap.nome}
              />
            ))}
          </ContentTab>
          <ContentTab
            hidden={numeroTab !== 1}
            id={`painel-${1}`}>
            {historicoChecklist !== undefined && historicoChecklist.map((historicoChecklistMap: ChecklistHistorico) => (
              <CardParada
                key={historicoChecklistMap.id}
                onClick={() => abrirChecklistRespondido(historicoChecklistMap.id)}
                data={historicoChecklistMap.data}
                nome={historicoChecklistMap.nome}
              />
            ))}
          </ContentTab>
        </Teste>
        <BotaoNovoChecklist>
        </BotaoNovoChecklist>
      </DivCorpo>
    </GridStyled>
  )
}

export default Inicio;
