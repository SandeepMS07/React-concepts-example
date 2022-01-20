import React, { Component } from 'react'

export default class ReactStateClass extends Component {
   constructor() 
   {
       super();
       this.state = {myCount:1}
   }

   counter = () =>
   {
       this.setState({myCount:this.state.myCount+1});
       console.log(this.state.myCount);
   }
   counterDec = () =>
   {
       this.setState({myCount:this.state.myCount-1});
       console.log(this.state.myCount);
   }
   reset = () =>
   {
       this.setState({myCount:this.state.myCount=1});
   }
   
   render() {
        return (
            <div>
                <h1>{this.state.myCount}</h1>
                <button onClick={this.counter}>Increment</button>
                <button onClick={this.counterDec}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
