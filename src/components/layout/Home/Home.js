import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CSS
import './Home.css';
// import background image
import wolf from '../../../images/wolf3.jpg';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="home-left">
					<header className="home-header">
						<h1 className="lg-heading">
							Phil <span>Stubbs</span>
						</h1>
						<h2 className="sm-heading">Web Developer, Project Manager, and Writer</h2>
					</header>
					<main className="home-main">
						<h2 className="sm-heading">When there are no more leaders to follow, you must become one.</h2>
						<div className="home-nav-links">
							<Link to="/about" className="btn  home-btn">
								About Me
							</Link>
							<Link to="/work" className="btn home-btn">
								My Work
							</Link>
							<Link to="/contact" className="home-btn btn">
								Contact Me
							</Link>
						</div>
					</main>
				</div>
				<div className="home-right">{/* <img src={wolf} alt="wolf" className="bg" /> */}</div>
			</div>
		);
	}
}

export default Home;
