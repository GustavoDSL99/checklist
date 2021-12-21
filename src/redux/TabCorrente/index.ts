import { Reducer } from 'redux'
import { NumeroTab } from './actionTypes'

export interface InterfaceTabCorrente {
    tabCorrente: {
      numeroTab: number
    }
}

const estadoInicial: any = {
    numeroTab: 0
}

const TabCorrenteAtiva: Reducer<InterfaceTabCorrente | any> = (state = estadoInicial, action: any) => {

  switch (action.type) {
    case NumeroTab.NumeroTab: {
      return {
        ...action.payload
      }
    }
    default:
      return state
  }
}

export default TabCorrenteAtiva
