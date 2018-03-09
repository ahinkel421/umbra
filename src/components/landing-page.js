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
		} else if (this.state.currentQuestion >= 0) {
			return (
				<div>
					<DialogSection
						currentQuestion={currentQuestionText}
						currentAnswers={currentAnswersArray}
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
