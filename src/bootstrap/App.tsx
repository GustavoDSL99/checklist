import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Rotas from './Rotas'
import { Provider } from 'react-redux'
import Tema from './Tema'
import store from '../redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Tema>
          <Rotas />
        </Tema>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
