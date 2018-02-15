import React from 'react';
import './../index.css';
import './landing-page.css'

export default class LandingPage extends React.Component {
	
	render() {
		return(
			<div>
				<h1>Umbra</h1>
				<button className='start-button'>Start Game</button>
			</div>
		);
	}
}