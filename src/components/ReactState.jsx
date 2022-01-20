import React, { Component } from 'react'

export default class ReactState extends Component {
    constructor() {
        super()

        this.state = {
             mycount:0
        }
    }

    counter = () =>
    {
        this.setState({mycount:this.state.mycount+1})
        console.log(this.state.mycount);
    }

    decrement = () =>
    {
        this.setState({mycount:this.state.mycount-1})
        console.log(this.state.mycount);
    }

    reset = () =>
    {
        console.log(this.state.mycount);
        this.setState({mycount:0})
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.mycount}
                </h1>
                <button onClick={this.counter}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
