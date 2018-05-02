import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="App-header">
          <h1 className="App-title">Learn React</h1>
          <p>Open source JavaScript libary for building dynamic user interfaces</p>
          <p>Some basics before going for the complex app</p>
          <a href="https://github.com/zamsonj/react-basics">Download the complete source code</a>
        </header>        
      </div>
    );
  }
}

export default Header;
