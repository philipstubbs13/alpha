// React related imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Internal UI components
import Header from '../../Header';

// import CSS
import './Home.css';

class Home extends Component {
	render() {
		return (
      <div className="home">
        <div className="home-container">
          <Header
            firstPhrase="Phil"
            secondPhrase="Stubbs"
            subHeading="Web Engineer, Project Manager, and Writer"
          />
          <main className="home-main">
            <h2 className="sm-heading home-secondary-heading">
							When there are no more leaders to follow, you must become one.
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
      </div>
		);
	}
}

export default Home;
