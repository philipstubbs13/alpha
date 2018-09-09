// Import React
import React, { Component } from 'react';
// import css
import './MenuButton.css';

class MenuButton extends Component {
	handleMenuClick = () => {
		console.log('menu click');
	};

	render() {
		return (
			<div
				className="menu-btn"
				onClick={() => {
					this.handleMenuClick();
				}}
				onKeyPress={() => {
					this.handleMenuClick();
				}}
				role="button"
				tabIndex={0}
			>
				<div className="btn-line" />
				<div className="btn-line" />
				<div className="btn-line" />
			</div>
		);
	}
}

export default MenuButton;
