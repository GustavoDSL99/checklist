import { InterfaceCurrentTab } from '.'
import { NumberTab } from './actionTypes'

export const activeCurrentTab = (payload: InterfaceCurrentTab | any) => ({
  type: NumberTab.NUMBER_TAB,
  payload
})