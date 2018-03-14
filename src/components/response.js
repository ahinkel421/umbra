import React from "react";
import "./response.css";

export default class Response extends React.Component {
	render() {
		return <p>{this.props.text}</p>;
	}
}
