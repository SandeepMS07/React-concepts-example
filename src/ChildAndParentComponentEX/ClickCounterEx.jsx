import React, { Component } from 'react';
// import SimpleCounter from './SimpleCounter';

export default class ClickCounterEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         myName : " "
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
      console.log("Hello I am Impure Component");
    return <div> 
        <h1>Name : {this.state.myName}</h1>
        <button onClick={this.UpdateName}>Sandeep M S</button>
        <button onClick={this.UpdateName2}>Sandy</button>
        {/* <SimpleCounter/> */}
    </div>;
  }
}
