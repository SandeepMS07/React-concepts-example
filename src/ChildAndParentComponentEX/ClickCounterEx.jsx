import React, { Component } from 'react';
import SimpleCounter from './SimpleCounter';

export default class ClickCounterEx extends Component {
  render() {
    return <div>
        <h1>Hello, I am click counter component</h1>
        <SimpleCounter/>
    </div>;
  }
}
