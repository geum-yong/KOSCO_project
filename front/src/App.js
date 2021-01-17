import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home.jsx';
import Inspection from './pages/Inspection.jsx';
import Purchase from './pages/Purchase.jsx';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/home' component={Home} />
      <Route path='/inspection' component={Inspection} />
      <Route path='/purchase' component={Purchase} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
