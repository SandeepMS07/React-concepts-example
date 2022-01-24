import React, { Component, PureComponent } from 'react';

export default class ClickCounterPureComponent extends PureComponent {
 
    constructor(props) {
      super(props)
    
      this.state = {
         myName:""
      }
    }
    
    UpdateName = () =>
    {
        this.setState({myName:"Sandeep M S"})
    }

    UpdateName2 = () =>
    {
        this.setState({myName:"Sandy"})
    }
 
    render() {
        console.log("Hello I am Pure Component");
    return <div>
        
      <h1>Name : {}</h1>
      <button onClick={this.UpdateName}>Sandeep M S</button>
      <button onClick={this.UpdateName2}>Sandy</button>
    </div>;
  }
}
