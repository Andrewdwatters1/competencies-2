import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Icons from './components/Icons';
import Nope from './components/Nope';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <i class="fas fa-circle-notch App-logo"></i>
          <img src="https://imgflip.com/s/meme/X-All-The-Y.jpg" class="all-the-things"/>
          <h1 className="App-title">Find all the Icons</h1>
        </header>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Icons}/>
            <Route path="/nope" component={Nope}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
