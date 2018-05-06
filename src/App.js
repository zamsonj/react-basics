import React, { Component } from 'react';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Bootstrap from './components/Bootstrap';
import Routing from './components/Routing';
import Forms from './components/Forms';
import Rest from './components/Rest';
import Passing from './components/Passing';

import './App.css';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <Header />   
          <Route exact path="/" component={Home}/>
          <Route path="/react-bootstrap" component={Bootstrap}/>
          <Route path="/react-router" component={Routing}/>
          <Route path="/react-forms" component={Forms}/>
          <Route path="/access-rest" component={Rest}/>
          <Route path="/pass-state-values" component={Passing}/>
        </div>
      </Router>
    );
  }
}

export default App;
