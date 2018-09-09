// Import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Import menu css
import './Menu.css';
// import image
import bioImage from '../../images/me.jpg';

class Menu extends Component {
	render() {
		return (
			<div>
				<nav className="menu">
					<div className="menu-branding">
						<img src={bioImage} alt="Phil Stubbs" className="bio-img" />
					</div>
					<div className="menu-nav">
						<ul>
							<li className="nav-link">
								<Link to="/">Home</Link>
							</li>
							<li className="nav-link">
								<Link to="/about">About Me</Link>
							</li>
							<li className="nav-link">
								<Link to="/work">Projects</Link>
							</li>
							<li className="nav-link">
								<Link to="/contact">Contact Me</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Menu;
