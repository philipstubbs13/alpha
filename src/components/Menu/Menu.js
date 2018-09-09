// Import React
import React, { Component } from 'react';
// Import menu css
import './Menu.css';

class Menu extends Component {
	render() {
		return (
			<div>
				<nav className="menu">
					<div className="menu-branding show">
						<div className="portrait" />
					</div>
					<ul className="menu-nav show">
						<li className="nav-item current">
							<a href="/" className="nav-link">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="/about" className="nav-link">
								About Me
							</a>
						</li>
						<li className="nav-item">
							<a href="/work" className="nav-link">
								My Work
							</a>
						</li>
						<li className="nav-item">
							<a href="/contact" className="nav-link">
								How To Reach Me
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Menu;
