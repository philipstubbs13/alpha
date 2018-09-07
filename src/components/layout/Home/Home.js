import React, { Component } from 'react';
// import CSS
import './Home.css';
// import background image
import wolf from '../../../images/wolf.jpg';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<img src={wolf} alt="wolf" className="bg" />
				<header>
					<h1 className="lg-heading">Phil Stubbs</h1>
					<h2 className="sm-heading">Code Nerd | Awesome Dev | User Advocate</h2>
				</header>
				<main className="home-main">
					<div className="home-quote">
						<h2 className="sm-heading">
							When there are no more leaders to follow, <br />
							<span className="quote-second-line">you must become one.</span>
						</h2>
					</div>
				</main>
			</div>
		);
	}
}

export default Home;
