import React from 'react';
import './../index.css';
import './landing-page.css'

export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startedGame: false
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
				<div>
					<h1>Umbra</h1>
					<button className='start-button' onClick={() => this.startGame(true)}>Start Game</button>
				</div>
			);
		}
		return(
			<dialogSection />
		);
	}
}