import { InterfaceCurrentIdChecklist } from '.'
import { IdChecklist } from './actionTypes'

export const activeCurrentIdChecklist = (payload: InterfaceCurrentIdChecklist | any) => ({
  type: IdChecklist.ID_CHECKLIST,
  payload
})