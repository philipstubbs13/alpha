// Import React
import React, { Component } from 'react';
// Import PropTypes for props validation
import PropTypes from 'prop-types';
// Import css for Header component.
import './Header.css';

// Create a reusable component to be used as a header for all the different pages.
class Header extends Component {
	render() {
		// ES6 destructuring of incoming props
		const { firstPhrase, secondPhrase, subHeading } = this.props;

		return (
			<header className="header">
				<h1 className="lg-heading">
					{firstPhrase} <span className="heading-second-word">{secondPhrase}</span>
				</h1>
				<h2 className="sm-heading">{subHeading}</h2>
			</header>
		);
	}
}

// props validation using prop-types
Header.propTypes = {
	firstPhrase: PropTypes.string.isRequired,
	secondPhrase: PropTypes.string.isRequired,
	subHeading: PropTypes.string.isRequired,
};

// Export the Header component so that it can be imported into the various pages
// And, rendered to the pages.
export default Header;
