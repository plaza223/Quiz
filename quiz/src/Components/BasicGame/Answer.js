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
          this.props.isAnswerCorrect === "pending" &&
          "basic-game__answer--hoverable"
        } ${
          this.props.chosenAnswer === this.props.answer &&
          `basic-game__answer--chosen-${
            this.props.isAnswerCorrect === "true" ? "correct" : "wrong"
          }`
        } ${
          this.props.isAnswerCorrect === "false" &&
          this.props.answer === this.props.correctAnswer &&
          "basic-game__answer--chosen-correct"
        }`}
        onClick={() => {
          if (this.props.isAnswerCorrect === "pending") {
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
