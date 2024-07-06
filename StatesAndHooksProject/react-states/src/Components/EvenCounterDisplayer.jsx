import React, { Component } from "react";

export default class EvenCounterDisplayer extends Component {
  render() {
    // Displaying only the even number of clicks
    const evenClicks = Math.floor(this.props.Count / 2) * 2;

    return (
      <div>
        <p>Clicked {evenClicks} times</p>
      </div>
    );
  }
}
