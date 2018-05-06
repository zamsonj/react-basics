import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';

class Passing extends Component {
  constructor(){
    super();
    this.state = {
      username: 'NO VALUE'
    }
  }

  changeUsername(newName){
    this.setState({
      username:newName
    });
  }
  render() {
    return (
    <div className="container text-left">
        <div className="row">
            <div className="col">
                <Link to="/">&lt; HOME</Link>               
                <hr/>  
                <Component1 username={this.state.username} changeUsername={this.changeUsername.bind(this)} />
                <hr />
                <Component2 username={this.state.username} />
                <hr />
                <p>We can pass the state of the parent component to the child as properties.</p>
                <p>In this case:</p>
                <div className="alert alert-secondary">
                    &lt;Component1 username=&#123;this.state.username&#125; changeUsername=&#123;this.changeUsername.bind(this)&#125; /&gt;
                    <br />
                    &lt;Component2 username=&#123;this.state.username&#125; /&gt;
                </div>
            </div>
        </div>
    </div>

    );
  }
}

export default Passing;
