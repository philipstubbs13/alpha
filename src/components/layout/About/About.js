import React, { Component } from 'react';
// import CSS
import './About.css';
// import bio image
import bioImage from '../../../images/me.jpg';
// import Header component
import Header from '../../Header';
// import Footer component
import Footer from '../../Footer';
// import MenuButton component
import MenuButton from '../../MenuButton';

class About extends Component {
	render() {
		return (
      <div>
        <div className="about">
          <div className="about-container">
            <MenuButton />
            <Header firstPhrase="About" secondPhrase="Me" subHeading="Let me tell you my story..." />
            <main className="about-main">
              <img src={bioImage} alt="Phil Stubbs" className="bio-img" />
              <div className="bio">
                <p>
									Hey there! I&#39;m Phil, and welcome to my little corner of the Internet.
                  I&#39;m a web developer but also a writer, project manager, user experience
                  advocate, and runner. I enjoy creating user interfaces as well as finding
                  creative, unique ways to improve the usability of new or existing web
                  applications. I posted my work to this site to show you my passion.
                  I&#39;m passionate about learning new tools and technologies to solve
                  problems related to designing user interfaces, presenting information,
                  and building applications for the web. Another passion of mine is
									running. When I&#39;m not working on my next web development project,
                  I enjoy running in various races and along different trails in
                  Minnesota. If you would like to know more, let&#39;s get in touch!
                </p>
              </div>
              <div className="about-card">
                <h2>
                  <i className="far fa-check-square" /> Web Developer
                </h2>
                <p>
                  Passionate about learning and using new web technologies
                  to plan, design, and build applications that help make
                  people&#39;s lives simple.
                </p>
              </div>
              <div className="about-card">
                <h2>
                  <i className="far fa-check-square" /> Project Manager
                </h2>
                <p>
									Experience with managing and planning individual and
                  team projects as well as finding creative solutions to keep projects
                  on track and ensure they are closed in a timely manner.
                </p>
              </div>
              <div className="about-card">
                <h2>
                  <i className="far fa-check-square" /> Writer
                </h2>
                <p>
									Able to digest and transform complex, technical
                  information and present it in a succinct way for fast and easy comprehension.
                </p>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
		);
	}
}

export default About;
