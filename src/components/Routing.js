import React, { Component } from 'react';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';

class Routing extends Component {
    
  render() {
    return (
      <div className="Routing">
        <div className="container text-left">
          <div className="row">
            <div className="col">
              <Link to="/">&lt; HOME</Link>               
              <hr/>    
              <h3>React Router</h3>
              <p>Basic routing is very easy in React with the latest updations.</p>
              <p className="codeLine">npm install react-router-dom --save</p>
              <p className="codeLine">import &#123; BrowserRouter as Router,  Route,  Link from 'react-router-dom' &#125;;</p>
              <p>Now you can go and add your components into the Router inside the root file (App.js in this case).</p>       
              <div className="alert alert-secondary">
                &lt; Router &gt; <br/>
                &lt;div className="App"&gt; <br/>
                &lt;Header /&gt;     //This header component stays in all pages.<br/>
                &lt;Route exact path="/" component=&#123;Home&#125;/&gt; <br/>
                &lt;Route path="/about" component=&#123;About&#125;/&gt; <br/>
                &lt;Route path="/contact" component=&#123;Contact&#125;/&gt; <br/>
                &lt;/div> <br/>
                &lt;/Router> <br/>
              </div>
              <p>Adding links to their specific pages is like this:</p> 
              <p className="codeLine">import &#123;Link&#125; from 'react-router-dom';</p> 
              <div className="alert alert-secondary">
              &lt;ul&gt;<br/>
              &lt;li&gt;&lt;Link to='/'&gt;HOME&lt;/Link&gt;&lt;/li&gt;<br/>
              &lt;li&gt;&lt;Link to='/about'&gt;ABOUT&lt;/Link&gt;&lt;/li&gt;<br/>
              &lt;li&gt;&lt;Link to='/contact'&gt;CONTACT&lt;/Link&gt;&lt;/li&gt;<br/>
                    &lt;/ul&gt;<br/>
              </div> 
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Routing;
