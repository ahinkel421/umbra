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

	handleNextQuestion(e) {
		e.preventDefault();
		this.setState({
			onResponse: false
		});
	}

	selectAnswer(answer) {
		var currentQuestion = QUESTIONS[this.state.currentQuestion];
		var currentQuestionAnswers = currentQuestion.answers;
		var selectedAnswer = currentQuestionAnswers[answer];

		this.setState({
			currentQuestion: selectedAnswer.goToQuestion,
			intelligence:
				this.state.intelligence + selectedAnswer.statEffect.intelligence
		});
	}

	handleResponse(e) {
		this.setState({
			onResponse: e
		});
	}

	render() {
		let currentQuestionText = QUESTIONS[this.state.currentQuestion].text;
		let currentAnswersArray = QUESTIONS[this.state.currentQuestion].answers;
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
						onResponse={this.state.onResponse}
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
