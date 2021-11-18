import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';

const reducers = combineReducers({
  
});

const store = createStore(
  reducers,
  undefined,
  devToolsEnhancer({ trace: true }),
);

export default store;
