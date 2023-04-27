import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="heading">Counter App</h1>
                <p className="value">Count: {this.state.count}</p>
                <div className="buttons">
                    <button className="button inc" onClick={this.incrementCount}>Increment</button>
                    <button className="button dec" onClick={this.decrementCount}>Decrement</button>
                </div>
            </div>
        );
    }
}

export default Counter;
