import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('ComponentDidMount called');
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount called');
  }

  incrementCounter = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('Render called');
    return (
      <div>
        <h2>CounterClass: {this.state.count}</h2>
        <button onClick={this.incrementCounter}>Increase</button>
      </div>
    );
  }
}

export default CounterClass;
