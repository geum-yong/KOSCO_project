import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home.jsx';
import Inspection from './pages/Inspection.jsx';
import Purchase from './pages/Purchase.jsx';
import NotFound from './pages/NotFound';

import A1 from './pages/doc/A1';
import A2 from './pages/doc/A2';
import A3 from './pages/doc/A3';
import B3 from './pages/doc/B3';
import C from './pages/doc/C';
import W1 from './pages/doc/W1';
import W from './pages/doc/W';
import B1 from './pages/doc/B1';
import F from './pages/doc/F';
import G from './pages/doc/G';
import I from './pages/doc/I';
import F2 from './pages/doc/F2';
import OX2 from './pages/doc/OX2';
import H1 from './pages/doc/H1';
import H2 from './pages/doc/H2';
import H3 from './pages/doc/H3';
import H31 from './pages/doc/H31';
import H4 from './pages/doc/H4';
import H41 from './pages/doc/H41';
import I1 from './pages/doc/I1';
import H2A from './pages/doc/H2A';
import P1 from './pages/doc/P1';
import L1 from './pages/doc/L1';

function App() {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/home' component={Home} />
      <Route path='/inspection' component={Inspection} />
      <Route path='/purchase' component={Purchase} />
      <Route path='/doc/A1' component={A1} />
      <Route path='/doc/A2' component={A2} />
      <Route path='/doc/A3' component={A3} />
      <Route path='/doc/B1' component={B1} />
      <Route path='/doc/B3' component={B3} />
      <Route path='/doc/C' component={C} />
      <Route path='/doc/W' component={W} />
      <Route path='/doc/W1' component={W1} />
      <Route path='/doc/F' component={F} />
      <Route path='/doc/F2' component={F2} />
      <Route path='/doc/G' component={G} />
      <Route path='/doc/I' component={I} />
      <Route path='/doc/I-1' component={I1} />
      <Route path='/doc/OX2' component={OX2} />
      <Route path='/doc/H1' component={H1} />
      <Route path='/doc/H2' component={H2} />
      <Route path='/doc/H2-A' component={H2A} />
      <Route path='/doc/H3' component={H3} />
      <Route path='/doc/H3-1' component={H31} />
      <Route path='/doc/H4' component={H4} />
      <Route path='/doc/H4-1' component={H41} />
      <Route path='/doc/P1' component={P1} />
      <Route path='/doc/L1' component={L1} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
