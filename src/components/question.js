import React from 'react';
import './question.css'

export default class Question extends React.Component {
	render() {
		return(
			<p>{this.props.text}</p>
		);
	}
}