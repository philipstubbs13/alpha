// import React
import React, { Component } from 'react';
// import Header component
import Header from '../../Header';
// import MenuButton component
import MenuButton from '../../MenuButton';
// import Footer component
import Footer from '../../Footer';
// import CSS
import './Contact.css';
// import/require social media icons/images
const Facebook = require('../../../images/facebook.svg');
const LinkedIn = require('../../../images/linkedin.svg');
const Twitter = require('../../../images/twitter.svg');
const GitHub = require('../../../images/github.svg');
const Stackoverflow = require('../../../images/stackoverflow.svg');

// Create an array called socialIcons that I can map over
// to render all of my icons to the contact page.
// This keeps the code DRY.
const socialIcons = [
	{
		id: 0,
		link: 'https://www.facebook.com/phil.stubbs.13',
		image: Facebook,
		name: 'Facebook',
	},
	{
		id: 1,
		link: 'https://www.linkedin.com/in/philipjstubbs/',
		image: LinkedIn,
		name: 'LinkedIn',
	},
	{
		id: 2,
		link: 'https://github.com/philipstubbs13',
		image: GitHub,
		name: 'GitHub',
	},
	{
		id: 3,
		link: 'https://twitter.com/iamPhilStubbs',
		image: Twitter,
		name: 'Twitter',
	},
	{
		id: 4,
		link: 'https://stackoverflow.com/users/8706269/phil',
		image: Stackoverflow,
		name: 'Stackoverflow',
	},
];

class Contact extends Component {
	render() {
		return (
			<div>
				<div className="contact">
					<div className="contact-container">
						<MenuButton />
						<Header
							firstPhrase="Contact"
							secondPhrase="Me"
							subHeading="Get in touch with me to get the ball rolling..."
						/>
						<main className="contact-main">
							<div className="contact-card email">
								<span>Email</span>
							</div>
							<div className="contact-card phone">
								<span>Phone</span>
							</div>
						</main>
						<div className="social-icons">
							{socialIcons.map(social => (
								<a href={social.link} target="_blank" rel="noopener noreferrer" key={social.id}>
									<img src={social.image} alt={social.name} className="social" />
								</a>
							))}
							;
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

// export the Contact component so that it can be imported into App.js
// and rendered to the page.
export default Contact;
