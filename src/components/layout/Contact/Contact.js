import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CSS
import './Contact.css';
// import images
import Facebook from '../../../images/facebook.svg';
import LinkedIn from '../../../images/linkedin.svg';
import Twitter from '../../../images/twitter.svg';
import GitHub from '../../../images/github.svg';
import Stackoverflow from '../../../images/stackoverflow.svg';

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
							<span>Email:</span>
							&nbsp; philipstubbs13@gmail.com
						</div>
						<div className="contact-card">
							<span>Phone:</span>
							&nbsp; 952-454-3933
						</div>
					</main>
					<div className="social-icons">
						<a href="https://www.facebook.com/phil.stubbs.13" target="_blank" rel="noopener noreferrer">
							<img src={Facebook} alt="Facebook logo" className="social" />
						</a>
						<a href="https://twitter.com/iamPhilStubbs" target="_blank" rel="noopener noreferrer">
							<img src={Twitter} alt="Twitter logo" className="social" />
						</a>
						<a href="https://www.linkedin.com/in/philipjstubbs/" target="_blank" rel="noopener noreferrer">
							<img src={LinkedIn} alt="LinkedIn logo" className="social" />
						</a>
						<a href="https://github.com/philipstubbs13" target="_blank" rel="noopener noreferrer">
							<img src={GitHub} alt="GitHub logo" className="social" />
						</a>
						<a
							href="https://stackoverflow.com/users/8706269/phil"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={Stackoverflow} alt="Stackoverflow logo" className="social" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
