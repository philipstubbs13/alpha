import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Header component
import Header from '../../Header';
// import CSS
import './Home.css';
// import background image
import wolf from '../../../images/wolf3.jpg';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="home-left">
					<Header
						firstPhrase="Phil"
						secondPhrase="Stubbs"
						subHeading="Web Developer, Project Manager, and Writer"
					/>
					<main className="home-main">
						<h2 className="sm-heading">
							When there are no more leaders to follow, <br />
							<span className="quote-second-line">you must become one.</span>
						</h2>
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
