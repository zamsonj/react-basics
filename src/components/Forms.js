import React, { Component } from 'react';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';

class Forms extends Component {
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    componentWillMount(){
        this.setState({users:[            
            {name: 'John Doe', phone: 876554321},
            {name: 'Sam Joe', phone: 2485098425},
            {name: 'Cris Loe', phone: 4845258569}
        ]});
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.refs.name.value==''|| this.refs.phone.value==''){
            alert('Plase fill in the fields');
        }else{
            let newUser = {name:this.refs.name.value, phone:this.refs.phone.value};
            let users = this.state.users;
            users.push(newUser);
            this.setState({users:users});
        }        
    }
  render() {     
    let userItem = this.state.users.map(user => {
    return(
            <li key={user.name}><strong>{user.name}</strong> : {user.phone}</li>
        );
    });
    return (
      <div className="Forms">
        <div className="container text-left">
          <div className="row">
            <div className="col">
              <Link to="/">&lt; HOME</Link>               
              <hr/>    
              <h3>Forms & Inputs</h3>    
              <p>You can add forms as same you do in normal HTML. In the below example I'm adding to the populating the user list from a data source. On submitting the form you are saving the values inside the user list temporarily.</p>          
              <p>On submitting the form to call a function </p>
              <p className="codeLine">onSubmit=&#123;this.handleSubmit.bind(this)&#125;</p>
              <p>To access the input field bind the form to the function and add a reference to the field. Eg: ref="name". Then inside the function</p>
              <p className="codeLine">this.refs.name.value</p>

              <form onSubmit={this.handleSubmit.bind(this)} className="form col-12 col-sm-6">
                <h4>Add User</h4>
                <div className="form-group">
                    <small>Name</small>
                    <input type="text" className="form-control" ref="name" />
                </div>
                <div className="form-group">
                    <small>Phone Number</small>
                    <input type="text" className="form-control" ref="phone" />
                </div>
                  
                  <input type="submit" value="SUBMIT" className="btn btn-primary" />
              </form>

                <br/>
              <h4>User List</h4>
              <p>Before binding data you should know what is <strong>state</strong> and <strong>lifecycle methods</strong>.</p>              
              <p>Components data will be stored in component's <strong>State</strong>. This <strong>State</strong> can be modified based on user action or other action. When a component <strong>State</strong> is changed React will re-render the component to the browser.</p>
              <ul>
                  {userItem}
              </ul>
              <div className="alert alert-secondary">
                
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Forms;
