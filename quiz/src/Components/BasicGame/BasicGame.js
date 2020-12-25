import React, { Component } from "react";
import Answer from "./Answer";
import { getQuestions } from "../../api";
import "./BasicGame.css";

export class BasicGame extends Component {
  state = {
    questions: [],
    level: 1,

    answerCorrect: "pending",
    chosenAnswer: null,
  };

  async componentDidMount() {
    const questionsArr = await getQuestions();

    this.setState({
      questions: questionsArr,
    });
    console.log("MOUNT");
  }
  updateQuestion = () => {
    this.setState({
      level: this.state.level + 1,
    });

    this.setState({
      answerCorrect: "pending",
      chosenAnswer: null,
    });
  };
  componentDidUpdate() {
    this.state.answerCorrect === "true" && this.updateQuestion();
  }

  checkIfCorrect = (answer, correctAnswer) => {
    console.log(answer);
    return answer === correctAnswer
      ? this.setState({ answerCorrect: "true" })
      : this.setState({ answerCorrect: "false" });
  };
  render() {
    const { questions, level, currentQuestion } = this.state;
    const correctAnswer = questions[level]?.correct_answer;
    const incorrectAnswers = questions[level]?.incorrect_answers;
    const allAnswers = incorrectAnswers?.concat(correctAnswer);
    let chosenAnswerColor = null;

    return (
      <div>
        <h1>{questions[level]?.question}</h1>
        <div>
          {allAnswers?.map((answer) => (
            <Answer
              answer={answer}
              answerCorrect={this.state.answerCorrect}
              chosenAnswerColor={chosenAnswerColor}
              chosenAnswer={this.state.chosenAnswer}
              checkIfCorrect={this.checkIfCorrect}
              correctAnswer={correctAnswer}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BasicGame;
