import React from "react";
import Question from "./question";
import Answer from "./answer";
import Response from "./response";
import "./dialog-section.css";

export default class DialogSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOption: ""
		};
		this.handleChecked = this.handleChecked.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNextButton = this.handleNextButton.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.selectAnswer(Number(this.state.selectedOption));
		this.props.handleResponse(true);
		this.setState({
			selectedOption: ""
		});
	}

	handleChecked(e) {
		this.setState({
			selectedOption: e.target.value
		});
	}

	handleNextButton(e) {
		e.preventDefault();
		this.props.handleNextQuestion(this.props.nextQuestion);
	}

	render() {
		if (!this.props.onResponse) {
			return (
				<section className="dialog-section">
					<Question text={this.props.currentQuestion} />
					<form>
						<ul>
							<li>
								<input
									type="radio"
									value="0"
									onChange={this.handleChecked}
									checked={this.state.selectedOption === "0"}
								/>
								<Answer
									text={this.props.currentAnswers[0].text}
								/>
							</li>
							<li>
								<input
									type="radio"
									value="1"
									onChange={this.handleChecked}
									checked={this.state.selectedOption === "1"}
								/>
								<Answer
									text={this.props.currentAnswers[1].text}
								/>
							</li>
							<li>
								<input
									type="radio"
									value="2"
									onChange={this.handleChecked}
									checked={this.state.selectedOption === "2"}
								/>
								<Answer
									text={this.props.currentAnswers[2].text}
								/>
							</li>
							<li>
								<input
									type="radio"
									value="3"
									onChange={this.handleChecked}
									checked={this.state.selectedOption === "3"}
								/>
								<Answer
									text={this.props.currentAnswers[3].text}
								/>
							</li>
						</ul>
						<button onClick={this.handleSubmit}>Submit</button>
					</form>
				</section>
			);
		} else {
			return (
				<section className="dialog-section">
					<Response text={this.props.currentQuestion} />
					<form>
						<button onClick={this.handleNextButton}>Proceed</button>
					</form>
				</section>
			);
		}
	}
}
