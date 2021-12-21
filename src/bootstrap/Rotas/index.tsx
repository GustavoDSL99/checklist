import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdicionarCheck from '../../screens/AdicionarCheck';
import { ChecklistRespondidoF } from '../../screens/ChecklistRespondido';
import Inicio from '../../screens/Inicio';
import NovoChecklist from '../../screens/NovoChecklist';
import ResponderChecklist from '../../screens/ResponderChecklist';

const Rotas = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/inicio" />
        </Route>
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/novochecklist" component={NovoChecklist} />
        <Route exact path="/adicionarcheck" component={AdicionarCheck} />
        <Route exact path="/responderchecklist" component={ResponderChecklist} />
        <Route exact path="/checklistrespondido" component={ChecklistRespondidoF} />
      </Switch>
    </>
  )
};

export default Rotas;
