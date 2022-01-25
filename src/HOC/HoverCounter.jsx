import React, { Component } from 'react';
import Hoc from './Hoc';

class HoverCounter extends Component {
  render() {
    return <div>
        <h1>Counter : {this.props.count}</h1>
        <button onMouseOver={this.props.updateCounter}>Hover-Me</button>
    </div>;
  }
}
export default Hoc(HoverCounter, 3)