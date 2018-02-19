import React from 'react';
import Stat from './stat';
import './stats-box.css';

export default class StatsBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerStrength: 0,
			playerSpeed: 0,
			playerIntelligence: 0
		}
	}
	render() {
		return(
			<div className='stats-box'>
				<h2>Players name</h2>
				<ul>
					<Stat text='Strength' value={this.state.playerStrength}/>
					<Stat text='Speed' value={this.state.playerSpeed}/>
					<Stat text='Intelligence' value={this.state.playerIntelligence} />
				</ul>
			</div>
		);
	}
}