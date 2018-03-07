import React from "react";
import Question from "./question";
import Answer from "./answer";
import "./dialog-section.css";

export default class DialogSection extends React.Component {
	render() {
		return (
			<section className="dialog-section">
				<Question text={this.props.currentQuestion} />
				<Answer currentAnswer={this.props.currentAnswer} key="0" />
				<Answer currentAnswer={this.props.currentAnswer} key="1" />
				<Answer currentAnswer={this.props.currentAnswer} key="2" />
				<Answer currentAnswer={this.props.currentAnswer} text="3" />
			</section>
		);
	}
}
