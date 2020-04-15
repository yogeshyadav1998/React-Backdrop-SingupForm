import React, { Component } from 'react';
import {Route, Switch} from 'react-router';

import Home from './components/home/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component = {Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
