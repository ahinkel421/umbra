import React from 'react';
import DialogSection from './dialog-section';
import StatsBox from './stats-box';
import './landing-page.css'

export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startedGame: false,
			currentQuestion: 0
		}
	}

	startGame(startedGame) {
		this.setState({
			startedGame
		});
	}

	render() {
		if(!this.state.startedGame) {
			return(
				<div className='button-box'>
					<button className='start-button' onClick={() => this.startGame(true)}>Start Game</button>
				</div>
			);
		}
		return(
			<div>
				<DialogSection />
				<StatsBox />
			</div>
		);
	}
}