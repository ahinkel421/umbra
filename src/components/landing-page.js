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
			name: '',
			strength: 0,
			speed: 0,
			intelligence: 0
		}
		this.setName = this.setName.bind(this);
	}

	startGame(startedGame) {
		this.setState({
			startedGame
		});
	}

	setName(e) {
		this.setState({
			name: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
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
					<form className='name-form' onSubmit={this.handleSubmit}>
						<input 
							className='player-name-input' 
							placeholder='Enter your name...' 
							value={this.state.value} 
							onChange={this.setName} 
						/>
						<button className="confirm-name-button">Submit</button>
					</form>
					<StatsBox 
						name={this.state.name} 
						strength={this.state.strength}
						speed={this.state.speed}
						intelligence={this.state.intelligence}
					/>
				</div>
			);
		}
	}
}