import React, { Component } from "react";

export default class Answer extends Component {
  state = {
    chosen: false,
  };

  // this.props.chosenAnswer === null && this.setState({ chosen: false });

  render() {
    return (
      <p
        className={`basic-game__answer ${
          this.props.answerCorrect === "pending" &&
          "basic-game__answer--hoverable"
        } ${
          this.props.chosenAnswer === this.props.answer &&
          `basic-game__answer--chosen-${
            this.props.answerCorrect === "true" ? "correct" : "wrong"
          }`
        } ${
          this.props.answerCorrect === "false" &&
          this.props.answer === this.props.correctAnswer &&
          "basic-game__answer--chosen-correct"
        }`}
        onClick={() => {
          if (this.props.answerCorrect === "pending") {
            this.props.handleChoice(this.props.answer);
            this.props.checkIfCorrect(
              this.props.answer,
              this.props.correctAnswer
            );
          }
        }}
      >
        {decodeURIComponent(this.props.answer)}
      </p>
    );
  }
}
