import React, { Component } from "react";

interface CounterState {
  count: number;
}
interface CounterProps {
  inc:number;
}



class Counter extends Component<CounterProps, CounterState> {
  constructor(props:CounterProps) {
    super(props);  

     
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + this.props.inc });
  };

  decrement = () => {
    this.setState({ count: this.state.count - this.props.inc });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
