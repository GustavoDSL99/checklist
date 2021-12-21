import { InterfaceTabCorrente } from '.'
import { NumeroTab } from './actionTypes'

export const tabCorrenteAtiva = (payload: InterfaceTabCorrente | any) => ({
  type: NumeroTab.NumeroTab,
  payload
})

export default {}
