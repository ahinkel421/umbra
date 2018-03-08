import React from "react";
import Question from "./question";
import Answer from "./answer";
import "./dialog-section.css";

export default class DialogSection extends React.Component {
	render() {
		return (
			<section className="dialog-section">
				<Question text={this.props.currentQuestion} />
				<form>
					<ul>
						<li>
							<input type="radio" />
							<Answer text={this.props.currentAnswers[0].text} />
						</li>
						<li>
							<input type="radio" />
							<Answer text={this.props.currentAnswers[1].text} />
						</li>
						<li>
							<input type="radio" />
							<Answer text={this.props.currentAnswers[2].text} />
						</li>
						<li>
							<input type="radio" />
							<Answer text={this.props.currentAnswers[3].text} />
						</li>
					</ul>
				</form>
			</section>
		);
	}
}
