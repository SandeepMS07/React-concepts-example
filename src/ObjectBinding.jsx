import React, { Component } from 'react';

export default class ObjectBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         sname:"Dinga"
      }
    //   this.changeName = this.changeName.bind(this)
    }
    
    // changeName()
    // {
    //     this.setState({sname:"Raju"})
    // }

    changeName = () =>
    {
        this.setState({sname:"Raju"})
    }
  render() {
    return <div>
        <h1>{this.state.sname}</h1>
       
        {/* Binding can hapen in 4 ways */}
        {/* 1. */}
        {/* <button onClick={this.changeName}>Click</button> */}

        {/* or */}

        {/* 2. */}
        {/* <button onClick={this.changeName.bind(this)}>Click</button> */}

        {/* or */}

        {/* 3. */}
        {/* <button onClick={()=>this.changeName()}>Click</button> */}

        {/* or */}
        {/* 4. */}
        <button onClick={this.changeName}>Click</button>
        
    </div>;
  }
}
