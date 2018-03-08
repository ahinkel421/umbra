import React from "react";
import "./answer.css";

export default class Answer extends React.Component {
	render() {
		return <label>{this.props.text}</label>;
	}
}
