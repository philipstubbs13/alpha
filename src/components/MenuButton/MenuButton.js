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
			<Link to="/menu">
				<div className="menu-btn">
					<div className="btn-line" />
					<div className="btn-line" />
					<div className="btn-line" />
				</div>
			</Link>
		);
	}
}

export default MenuButton;
