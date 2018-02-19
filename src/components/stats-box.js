import React from 'react';
import Stat from './stat';

export default class StatsBox extends React.Component {

	render() {
		return(
			<div className='stats-box'>
				<h2>Players name</h2>
				<ul>
					<li>
						<Stat />
					</li>
					<li>
						<Stat />
					</li>
					<li>
						<Stat />
					</li>
					<li>
						<Stat />
					</li>
				</ul>
			</div>
		);
	}
}