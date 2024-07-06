//import PropTypes from 'prop-types'
import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";
import "./ClassStateExample/counter.css";
export default class MyCounter extends Component {
  constructor(props) {
    super(props);

    // Initializing state with clickCount
    this.state = {
      clickCount: 0,
    };
  }

  // Function to update the click count in the state
  allClicksCounter = () => {
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}>Click Me</button>

        <CounterDisplayer clickCount={this.state.clickCount} />

        <EvenCounterDisplayer Count={this.state.clickCount} />
      </div>
    );
  }
}
