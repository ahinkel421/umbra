import React from 'react';
import DialogSection from './dialog-section';
import StatsBox from './stats-box';
import './landing-page.css'

export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startedGame: false,
			currentQuestion: 0,
			playerName: ''
		}
	}

	startGame(startedGame) {
		this.setState({
			startedGame
		});
	}

	setName(name) {
		this.setState({
			playerName: name
		});
	}

	render() {
		if(!this.state.startedGame) {
			return(
				<div className='button-box'>
					<button onClick={() => this.startGame(true)}>Start Game</button>
				</div>
			);
		}
		else if(this.state.currentQuestion === 0) {
			return(
				<div>
					<DialogSection />
					<form className='name-form' onSubmit={e => 
						e.preventDefault()
					}>
						<input className='player-name-input' placeholder='Enter your name' />
						<button>Submit</button>
					</form>
					<StatsBox name={this.state.playerName} />
				</div>
			);
		}
	}
}