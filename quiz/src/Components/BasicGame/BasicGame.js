import React, { Component } from "react";
import Answer from "./Answer";
import { getQuestions } from "../../api";
import "./BasicGame.css";
import StartAgain from "./StartAgain";

export class BasicGame extends Component {
  state = {
    questions: [],
    allAnswers: [],
    level: 0,
    isAnswerCorrect: "pending",
    chosenAnswer: null,
    initializing: false,
    promptActive: false,
    gameEnd: false,
  };

  // LIFECYCLE METODE

  // Ova metoda se triggerira kada se komponenta prvi put renderira
  componentDidMount() {
    this.initializeGame();
  }

  // Ova metoda se triggerira na svaki render osim orvi
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.isAnswerCorrect === "true" &&
      this.state.isAnswerCorrect !== prevState.isAnswerCorrect
    ) {
      this.handleCorrect();
    } else if (
      this.state.isAnswerCorrect === "false" &&
      this.state.isAnswerCorrect !== prevState.isAnswerCorrect
    ) {
      this.handleFalse();
    }
  }

  checkIfCorrect = (answer, correctAnswer) => {
    return answer === correctAnswer
      ? this.setState({ isAnswerCorrect: "true" })
      : this.setState({ isAnswerCorrect: "false" });
  };

  handleChoice = (answer) => {
    this.setState({ chosenAnswer: answer });
  };

  handleCorrect = () => {
    if (this.state.level >= this.state.questions.length - 1) {
      setTimeout(() => {
        this.showPrompt();
      }, 2000);
      return;
    }
    setTimeout(() => {
      this.updateQuestion();
    }, 2000);
  };

  handleFalse = () => {
    setTimeout(() => {
      this.showPrompt();
    }, 2000);
  };

  initializeGame = async () => {
    this.setState({
      initializing: true,
    });
    const questionsArr = await getQuestions();

    this.setState({
      level: 0,
      isAnswerCorrect: "pending",
      chosenAnswer: null,
      promptActive: false,
      questions: questionsArr,
      allAnswers: questionsArr[0]?.incorrect_answers
        ?.concat(questionsArr[0]?.correct_answer)
        .sort(() => 0.5 - Math.random()),
      initializing: false,
    });
  };

  showPrompt = () => {
    this.setState({ promptActive: true });
  };

  updateQuestion = async () => {
    this.setState({
      isAnswerCorrect: "pending",
      chosenAnswer: null,
      level: this.state.level + 1,
      allAnswers: this.state.questions[this.state.level + 1]?.incorrect_answers
        ?.concat(this.state.questions[this.state.level + 1]?.correct_answer)
        .sort(() => 0.5 - Math.random()),
    });
  };

  render() {
    const { questions, level, initializing, promptActive } = this.state;
    const correctAnswer = questions[level]?.correct_answer;
    const incorrectAnswers = questions[level]?.incorrect_answers;

    let chosenAnswerColor = null;
    if (initializing) {
      return <h1>LOADING...</h1>;
    }
    return !initializing && promptActive ? (
      <StartAgain initializeGame={() => this.initializeGame} />
    ) : (
      <div className="question__container">
        <h1 className="question__container__h1">
          {decodeURIComponent(questions[level]?.question)}
        </h1>
        <div className="question__container__answers">
          {this.state.allAnswers?.map((answer) => (
            <Answer
              answer={answer}
              isAnswerCorrect={this.state.isAnswerCorrect}
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
