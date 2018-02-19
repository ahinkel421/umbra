import React from 'react';
import './question.css'

export default class Question extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			questionNumber: 0
		}
	}
	render() {
		return(
			<p>Q: Welcome traveller. First things first, what is your name?</p>
		);
	}
}