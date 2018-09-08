import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CSS
import './Home.css';
// import background image
import wolf from '../../../images/wolf.jpg';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<img src={wolf} alt="wolf" className="bg" />
				<div className="home-container">
					<header className="header">
						<h1 className="lg-heading">Phil Stubbs</h1>
						<h2 className="sm-heading">Web Developer, Project Manager, and Writer</h2>
					</header>
					<main className="home-main">
						<h2 className="sm-heading">
							When there are no more leaders to follow, <br />
							<span className="quote-second-line">you must become one.</span>
						</h2>
						<div className="home-btn">
							<Link to="/about" className="btn">
								Learn more about me
							</Link>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default Home;
