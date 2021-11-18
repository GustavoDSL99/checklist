import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './Rotas';
import Tema from './Tema';

function App() {
  return (
    <BrowserRouter>
      <Tema>
        <Rotas />
      </Tema>
    </BrowserRouter>


  );
}

export default App;
