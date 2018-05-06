import React, { Component } from 'react';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container text-left">
          <div className="row">
            <div className="col col-12 col-sm-6">
              <h3>Some Advantages</h3>
              <ul>
                <li>Simple declarative view for each state</li>
                <li>Encapsulated components</li>
                <li>Virtual DOM</li>
                <li>Completely independent library</li>
                <li>Can work with many other languages or frameworks</li>
              </ul>
              <p>NOTE: We are using JSX(JavaScript Syntax Extension) a preprocessor that adds XML syntax to JavaScript</p>
            </div>
            <div className="col col-12 col-sm-6">
            <h3>What we will do here?</h3>
              <p className="codeLine">npm create-react-app -g</p>
              <p className="codeLine">create-react-app learreact</p>
              <ul>
                <li><Link to='/react-bootstrap'>Add Bootstrap</Link></li>
                <li><Link to='/react-router'>Routing in React</Link></li>
                <li><Link to='/react-forms' >Forms and Input</Link></li>
                <li><Link to='/pass-state-values' >Passing properties between components</Link></li>
                <li><Link to='/access-rest' >Fetch data from an API</Link></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Home;
