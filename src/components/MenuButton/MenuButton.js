// Import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import css
import './MenuButton.css';

class MenuButton extends Component {
	handleMenuClick = () => {
		console.log('menu click');
	};

  render() {
		return (
			<div>
				<Link to="/menu">
					<div className="menu-btn side-menu-icon">
						<div className="btn-line" />
						<div className="btn-line" />
						<div className="btn-line" />
					</div>
				</Link>
				<a href="https://www.facebook.com/phil.stubbs.13" target="_blank" rel="noopener noreferrer" key="0">
					<i className="fab fa-facebook fa-2x side-menu-icon" />
				</a>
				<a href="https://github.com/philipstubbs13" target="_blank" rel="noopener noreferrer" key="1">
					<i className="fab fa-github-square fa-2x side-menu-icon" />
				</a>
				<a href="https://www.linkedin.com/in/philipjstubbs/" target="_blank" rel="noopener noreferrer" key="2">
					<i className="fab fa-linkedin fa-2x side-menu-icon" />
				</a>
				<a href="https://twitter.com/iamPhilStubbs" target="_blank" rel="noopener noreferrer" key="3">
					<i className="fab fa-twitter-square fa-2x side-menu-icon" />
				</a>
				<a
					href="https://stackoverflow.com/users/8706269/phil"
					target="_blank"
					rel="noopener noreferrer"
					key="4"
				>
					<i className="fab fa-stack-overflow fa-2x side-menu-icon" />
				</a>
			</div>
		);
	}
}

export default MenuButton;
