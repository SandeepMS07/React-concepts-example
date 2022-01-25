import React, { Component } from 'react';
import Hoc from "./Hoc"


class ClickCounter extends Component {
   

  render() { 
    return <div> 
        <h1>Counter : {this.props.count}</h1>
        <button onClick={this.props.updateCounter}>Click-Me</button>

    </div>;
  }
}
export default Hoc(ClickCounter,2)