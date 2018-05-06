import React, { Component } from 'react';

class Component2 extends Component {
  render() {
    return (
      <div className="container">
        <h4>Component 2:Display Text</h4>
        <p>Your text is: {this.props.username}</p>
      </div>
    );
  }
}

export default Component2;
