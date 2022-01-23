import React, { Component } from 'react';
// import SimpleCounter from './SimpleCounter';

export default class ClickCounterEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
    UpdateCount = () =>
    {
        this.setState({count : this.state.count+1})
    }
  render() {
      console.log("Hello I AM SANDEEP M S");
    return <div> 
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.UpdateCount}>Click</button>
        {/* <SimpleCounter/> */}
    </div>;
  }
}
