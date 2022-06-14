import { Component } from "react";
class StateClass extends Component {
  constructor(props) {
    super();
    this.state = { count: 1 };
  }
  render() {
    const increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const decrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
    return (
      <>
        <h2>Counts {this.state.count} </h2>
        <button onClick={() => increment()}> click to increment</button>
        <button onClick={() => decrement()}> click to decrement </button>
      </>
    );
  }
}

export default StateClass;
