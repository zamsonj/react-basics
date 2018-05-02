import React, { Component } from 'react';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';

class Rest extends Component {
    constructor(){
        super();
        this.state = {
            userRest: []
        }
    }
    callAPI(){
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        }).then(results=>{
            return results.json();
        }).then(data=>{
            this.setState({userRest:data});
        }).catch(function() {
            console.log("error");
        });
    }
    componentWillMount(){
        this.callAPI();
    }
  render() {     
    let userItems = this.state.userRest.map(user => {
        return(
                <div className="userBox col-12 col-sm-6 col-md-4" key={user.id}>
                    <div className="alert alert-info">
                        <strong>{user.name}</strong> 
                        <div>Email: {user.email}</div>
                        <div>Address: {user.address.street},{user.address.city},{user.address.zipcode}</div>
                    </div>
                </div>
            );
    });
    return (
      <div className="Rest">
        <div className="container text-left">
          <div className="row">
            <div className="col">
              <Link to="/">&lt; HOME</Link>               
              <hr/>    
              <h3>Accessing REST APIs</h3>
              <p>I'm accessing a sample data here from 'https://jsonplaceholder.typicode.com/users'. </p>
              <div className="alert alert-secondary">
              fetch&#40;'https://jsonplaceholder.typicode.com/users', &#123;<br/>
            method: 'GET'<br/>
            &#125;&#41;.then&#40;results=>&#123;
            return results.json&#40;&#41;;<br/>
            &#125;&#41;.then&#40;data=>&#123;
            this.setState&#40;&#123;userList:data&#125;&#41;;
            &#125;&#41;<br/>
            .catch&#40;function&#40;&#41; &#123;
                console.log&#40;"error"&#41;;
                &#125;&#41;;
              </div>
              <h4>Users from Remote Server</h4>
              <div className="row">
                {userItems}
              </div>
              <div className="alert alert-secondary">
                
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Rest;
