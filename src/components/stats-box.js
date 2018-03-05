import React from 'react';
import Stat from './stat';
import './stats-box.css';

export default class StatsBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
		// updateName(name) {
			//need to grab user's input from question and 
			//assign it to this.state.playerName
		// }
	}
	render() {
		return(
			<div className='stats-box'>
				<h2 className='player-name'>{this.props.name}</h2>
				<ul>
					<Stat text='Strength' value={this.props.strength} />
					<Stat text='Speed' value={this.props.speed} />
					<Stat text='Intelligence' value={this.props.intelligence} />
				</ul>
			</div>
		);
	}
}