import React from "react";
class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  decrement() {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  }

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>

        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </>
    );
  }
}

export default CounterClass;
