import React, { Component } from "react";

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>Number of Clicks: {this.props.clickCount}</p>
      </div>
    );
  }
}
