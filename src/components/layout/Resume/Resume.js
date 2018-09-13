// import React
import React, { Component } from 'react';
// import Resume component
import Header from '../../Header';
// import Footer component
import Footer from '../../Footer';
// import MenuButton component
import MenuButton from '../../MenuButton';
// import CSS
import './Resume.css';

class Resume extends Component {
	render() {
		return (
			<div>
				<div className="resume">
					<div className="resume-container">
						<MenuButton />
						<Header
							firstPhrase="My"
							secondPhrase="Resume"
							subHeading="Developer, Project Manager, and Writer"
						/>
						<main className="resume-main" />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Resume;
