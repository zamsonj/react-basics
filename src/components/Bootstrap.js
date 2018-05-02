import React, { Component } from 'react';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';

class Bootstrap extends Component {
    
  render() {
    return (
      <div className="Bootstrap">
        <div className="container text-left">
          <div className="row">
            <div className="col">
              <Link to="/">&lt; HOME</Link>               
              <hr/>    
              <h3>Bootstrap with React</h3>
              <p>Adding Bootstrap to React is pretty easy as you can do it multiple ways. You can also do it by adding Bootstrap's CSS and JS file into the project. But the most recomended way is to do it in the react way. </p>
              <p className="codeLine">npm install react-bootstrap --save</p>
              <p className="codeLine">npm install bootstrap --save</p>
              <p className="codeLine">import Bootstrap from 'bootstrap/dist/css/bootstrap.css';</p>
              <p>That's all, you are good to go and add Bootstrap's classes. Remember it's not <strong>class</strong>, but <strong>className</strong></p>       
              <div className="alert alert-secondary">
                <p>&lt;button className="btn btn-success"&gt;SUCCESS&lt;/button&gt;</p>
                <button className="btn btn-success">SUCCESS</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Bootstrap;
