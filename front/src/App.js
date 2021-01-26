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
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
