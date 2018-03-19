import React from "react";
import DialogSection from "./dialog-section";
import StatsBox from "./stats-box";
import "./landing-page.css";
import QUESTIONS from "../all-questions";

export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startedGame: false,
			currentQuestion: 0,
			onResponse: false,
			strength: 0,
			speed: 0,
			intelligence: 0
		};
	}

	startGame(startedGame) {
		this.setState({
			startedGame
		});
	}

	handleNextQuestion(index) {
		this.setState({
			onResponse: false,
			currentQuestion: index
		});
	}

	selectAnswer(answer) {
		var currentQuestion = QUESTIONS[this.state.currentQuestion];
		var currentQuestionAnswers = currentQuestion.answers;
		var selectedAnswer = currentQuestionAnswers[answer];

		this.setState({
			currentQuestion: selectedAnswer.goToQuestion,
			strength: this.state.strength + selectedAnswer.statEffect.strength,
			speed: this.state.speed + selectedAnswer.statEffect.speed,
			intelligence:
				this.state.intelligence + selectedAnswer.statEffect.intelligence
		});
	}

	handleResponse(boo) {
		this.setState({
			onResponse: boo
		});
	}

	render() {
		let currentQuestionText = QUESTIONS[this.state.currentQuestion].text;
		let currentAnswersArray = QUESTIONS[this.state.currentQuestion].answers;
		let nextQuestionIndex =
			QUESTIONS[this.state.currentQuestion].goToQuestion;
		if (!this.state.startedGame) {
			return (
				<div className="button-box">
					<button onClick={() => this.startGame(true)}>
						Start Game
					</button>
				</div>
			);
		} else if (
			this.state.currentQuestion >= 0 &&
			this.state.onResponse === false
		) {
			return (
				<div>
					<DialogSection
						currentQuestion={currentQuestionText}
						currentAnswers={currentAnswersArray}
						selectAnswer={answer => this.selectAnswer(answer)}
						onResponse={this.state.onResponse}
						handleResponse={e => this.handleResponse(e)}
					/>
					<StatsBox
						name={this.state.name}
						strength={this.state.strength}
						speed={this.state.speed}
						intelligence={this.state.intelligence}
					/>
				</div>
			);
		} else {
			return (
				<div>
					<DialogSection
						currentQuestion={currentQuestionText}
						nextQuestion={nextQuestionIndex}
						onResponse={this.state.onResponse}
						handleNextQuestion={index =>
							this.handleNextQuestion(index)
						}
					/>
					<StatsBox
						name={this.state.name}
						strength={this.state.strength}
						speed={this.state.speed}
						intelligence={this.state.intelligence}
					/>
				</div>
			);
		}
	}
}
