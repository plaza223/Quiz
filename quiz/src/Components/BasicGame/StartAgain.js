import React, { Component } from "react";

export default class StartAgain extends Component {
  render() {
    return (
      <div>
        <h4>Do you want to start a new game?</h4>
        <div>
          <button onClick={this.props.initializeGame()}>Yes</button>
          <button>No</button>
        </div>
      </div>
    );
  }
}
