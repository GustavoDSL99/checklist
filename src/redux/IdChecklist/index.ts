import { Reducer } from 'redux'
import { IdChecklist } from './actionTypes'

export interface InterfaceCurrentIdChecklist {
  currentIdChecklist: {
    id: number,
  }
}

const initialState: any = {
  id: 0,
}

const ActiveCurrentIdChecklist: Reducer<InterfaceCurrentIdChecklist> = (state = initialState, action: any) => {
  switch (action.type) {
    case IdChecklist.ID_CHECKLIST: {
      return action.payload
    }
    default:
      return state
  }
}

export default ActiveCurrentIdChecklist
