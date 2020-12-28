import React, { Component } from "react";
import Answer from "./Answer";
import { getQuestions } from "../../api";
import "./BasicGame.css";

export class BasicGame extends Component {
  state = {
    questions: [],
    allAnswers: [],
    level: 0,
    answerCorrect: "pending",
    chosenAnswer: null,
  };

  async componentDidMount() {
    const questionsArr = await getQuestions();
    this.setState({
      questions: questionsArr,
      allAnswers: questionsArr[this.state.level]?.incorrect_answers
        ?.concat(questionsArr[this.state.level]?.correct_answer)
        .sort(() => 0.5 - Math.random()),
    });
  }
  updateQuestion = async () => {
    if (this.state.answerCorrect === "pending") return;
    this.state.answerCorrect === "true"
      ? this.setState({
          level: this.state.level + 1,
        })
      : this.setState({
          level: 0,
        });
    this.setState({
      answerCorrect: "pending",
      chosenAnswer: null,
    });

    if (this.state.level > 0) {
      this.setState({
        allAnswers: this.state.questions[this.state.level]?.incorrect_answers
          ?.concat(this.state.questions[this.state.level]?.correct_answer)
          .sort(() => 0.5 - Math.random()),
      });
    } else {
      const questionsArr = await getQuestions();
      this.setState({
        questions: questionsArr,
        allAnswers: questionsArr[this.state.level]?.incorrect_answers
          ?.concat(questionsArr[this.state.level]?.correct_answer)
          .sort(() => 0.5 - Math.random()),
      });
    }
  };
  componentDidUpdate() {
    if (this.state.answerCorrect === "pending") return;
    setTimeout(() => {
      this.updateQuestion();
    }, 2000);
  }

  checkIfCorrect = (answer, correctAnswer) => {
    console.log(answer);
    return answer === correctAnswer
      ? this.setState({ answerCorrect: "true" })
      : this.setState({ answerCorrect: "false" });
  };

  handleChoice = (answer) => {
    this.setState({ chosenAnswer: answer });
  };
  render() {
    const { questions, level } = this.state;
    const correctAnswer = questions[level]?.correct_answer;
    const incorrectAnswers = questions[level]?.incorrect_answers;

    let chosenAnswerColor = null;

    return (
      <div className="question__container">
        <h1 className="question__container__h1">
          {decodeURIComponent(questions[level]?.question)}
        </h1>
        <div className="question__container__answers">
          {this.state.allAnswers?.map((answer) => (
            <Answer
              answer={answer}
              answerCorrect={this.state.answerCorrect}
              chosenAnswerColor={chosenAnswerColor}
              chosenAnswer={this.state.chosenAnswer}
              checkIfCorrect={this.checkIfCorrect}
              correctAnswer={correctAnswer}
              handleChoice={this.handleChoice}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BasicGame;
