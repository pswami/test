import React, { Component } from 'react';
import logo from './images/logo.svg';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './stylesheets/App.scss';

import Home from './pages/Home';
import MyTeam from './pages/MyTeam';
import FreeAgents from './pages/FreeAgents';
import Standings from './pages/Standings';
import Settings from './pages/Settings';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Sidebar />
          <div className="content col-sm-10 offset-sm-2 col-lg-11 offset-lg-1">
            <Route exact path="/" component={Home}/>
            <Route exact path="/team" component={MyTeam}/>
            <Route exact path="/freeagents" component={FreeAgents}/>
            <Route exact path="/standings" component={Standings}/>
            <Route exact path="/settings" component={Settings}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
