// import React
import React, { Component } from 'react';
// import Resume component
import Header from '../../Header';
// import CSS
import './Resume.css';

class Resume extends Component {
	render() {
		return (
			<div>
				<Header firstPhrase="My" secondPhrase="Resume" subHeading="Developer, Project Manager, and Writer" />
			</div>
		);
	}
}

export default Resume;
