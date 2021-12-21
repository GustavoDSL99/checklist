import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import currentIdChecklist from './IdChecklist';
import tabCorrente from './TabCorrente';


const reducers = combineReducers({
  currentIdChecklist,
  tabCorrente,
});

const store = createStore(
  reducers,
  undefined,
  devToolsEnhancer({ trace: true }),
);

export default store;
