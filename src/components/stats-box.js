import React from "react";
import Stat from "./stat";
import "./stats-box.css";

export default class StatsBox extends React.Component {
	render() {
		return (
			<div className="stats-box">
				<h2 className="player-stats">Stats</h2>
				<ul>
					<Stat text="Strength" value={this.props.strength} />
					<Stat text="Speed" value={this.props.speed} />
					<Stat text="Intelligence" value={this.props.intelligence} />
				</ul>
			</div>
		);
	}
}
