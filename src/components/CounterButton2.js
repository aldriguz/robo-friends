import React, { Component } from "react";

class CounterButton2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //with this we make sure component will not update even if parent component is updated
  shouldComponentUpdate      (nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }






  updateCount =    () => {
    //improved way to update, why? I don´t know xD
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    //console.log('CounterButton');
    return (
      <button id="counter" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton2;
