import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CSS
import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<div className="contact-container">
					<header className="header">
						<h1 className="lg-heading">
							Contact <span className="heading-second-word">Me</span>
						</h1>
						<h2 className="sm-heading">Get in touch with me to get the ball rolling...</h2>
					</header>
					<main className="contact-main">
						<div className="contact-card">
							<span>Email: </span>
							<br />
							philipstubbs13@gmail.com
						</div>
						<div className="contact-card">
							<span>Phone: </span>
							<br />
							952-454-3933
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default Contact;
