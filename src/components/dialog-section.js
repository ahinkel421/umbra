import React from "react";
import Question from "./question";
import Answer from "./answer";
import "./dialog-section.css";

export default class DialogSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOption: "option0"
		};
		this.handleChecked = this.handleChecked.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	handleChecked(e) {
		this.setState({
			selectedOption: e.target.value
		});
	}

	render() {
		return (
			<section className="dialog-section">
				<Question text={this.props.currentQuestion} />
				<form>
					<ul>
						<li>
							<input
								type="radio"
								value="option0"
								onChange={this.handleChecked}
								checked={
									this.state.selectedOption === "option0"
								}
							/>
							<Answer text={this.props.currentAnswers[0].text} />
						</li>
						<li>
							<input
								type="radio"
								value="option1"
								onChange={this.handleChecked}
								checked={
									this.state.selectedOption === "option1"
								}
							/>
							<Answer text={this.props.currentAnswers[1].text} />
						</li>
						<li>
							<input
								type="radio"
								value="option2"
								onChange={this.handleChecked}
								checked={
									this.state.selectedOption === "option2"
								}
							/>
							<Answer text={this.props.currentAnswers[2].text} />
						</li>
						<li>
							<input
								type="radio"
								value="option3"
								onChange={this.handleChecked}
								checked={
									this.state.selectedOption === "option3"
								}
							/>
							<Answer text={this.props.currentAnswers[3].text} />
						</li>
					</ul>
					<button onClick={this.handleSubmit}>Submit</button>
				</form>
			</section>
		);
	}
}
