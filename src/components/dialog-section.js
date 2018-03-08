import React from "react";
import Question from "./question";
import Answer from "./answer";
import "./dialog-section.css";

export default class DialogSection extends React.Component {
	render() {
		return (
			<section className="dialog-section">
				<Question text={this.props.currentQuestion} />
				<Answer text={this.props.currentAnswers[0].text} />
				<Answer text={this.props.currentAnswers[1].text} />
				<Answer text={this.props.currentAnswers[2].text} />
				<Answer text={this.props.currentAnswers[3].text} />
			</section>
		);
	}
}
