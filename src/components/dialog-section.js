import React from 'react';
import Question from './question.js';
import './dialog-section.css';

export default class DialogSection extends React.Component {
	render() {
		return(
			<section className='dialog-section'>
				<Question />
			</section>
		);
	}
}