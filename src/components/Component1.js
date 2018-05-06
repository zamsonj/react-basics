import React, { Component } from 'react';

class Component1 extends Component {
  constructor(){
    super();
    this.state = {
      newName:[]
    }
  }
  componentWillMount(){
    console.log('mount');
  }
  checkAndChange(e){
      if(this.refs.name.value==''){
          alert('Enter some text!');
      }else{
        this.setState({
            newName:this.refs.name.value
          }, ()=>{this.props.changeUsername(this.state.newName)});
      }
    
    
  }
  componentWillMount(){
    
  }
  render() {
    return (      
      <div className="container">
        <h4>Component 1: Enter Text</h4>
        <input type="text" placeholder="Enter text" ref="name" /><br /><br/>
        <button className="btn btn-primary" onClick={this.checkAndChange.bind(this)}>Click to change text</button>
      </div>
    );
  }
}

export default Component1;
