import React from "react";

export default class Stat extends React.Component {
	render() {
		return (
			<li>
				{this.props.text}: {this.props.value}
			</li>
		);
	}
}
