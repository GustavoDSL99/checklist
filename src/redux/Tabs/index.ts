import { Reducer } from 'redux'
import { NumberTab } from './actionTypes'

export interface InterfaceCurrentTab {
    currentTab: {
      numberTab: number
    }
}

const initialState: any = {
    numberTab: 0
}

const ActiveCurrentTab: Reducer<InterfaceCurrentTab> = (state = initialState, action: any) => {

  switch (action.type) {
    case NumberTab.NUMBER_TAB: {
      return action.payload
    }
    default:
      return state
  }
}

export default ActiveCurrentTab
