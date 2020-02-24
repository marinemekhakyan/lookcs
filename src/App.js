import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Secure from './pages/Secure';

import './App.css'

function App() {
  return (
    <Router>
      <div className='flexbox'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/secure' component={Secure} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
