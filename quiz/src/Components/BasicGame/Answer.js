import React, { Component } from "react";

export default class Answer extends Component {
  state = {
    chosen: false,
  };
  render() {
    return (
      <p
        className={`basic-game__answer ${
          this.state.chosen
            ? `basic-game__answer--chosen-${
                this.props.answerCorrect === "true" ? "correct" : "wrong"
              }`
            : "ldlls"
        }`}
        onClick={() => {
          if (this.props.answerCorrect === "pending") {
            this.setState({ chosen: true });
            this.props.checkIfCorrect(
              this.props.answer,
              this.props.correctAnswer
            );
            if (this.props.answer === this.props.correctAnswer) {
              this.setState({ chosen: false });
            }
          }
        }}
      >
        {this.props.answer}
      </p>
    );
  }
}
