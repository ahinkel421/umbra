import React from "react";
import "./answer.css";

export default class Answer extends React.Component {
	render() {
		return <div>{this.props.text}</div>;
	}
}
