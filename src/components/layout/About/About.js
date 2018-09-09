import React, { Component } from 'react';
// import CSS
import './About.css';
// import bio image
import bioImage from '../../../images/me.jpg';
// import Header component
import Header from '../../Header';

class About extends Component {
	render() {
		return (
			<div className="about">
				<div className="about-container">
					<Header firstPhrase="About" secondPhrase="Me" subHeading="Let me tell you my story" />
					<main className="about-main">
						<img src={bioImage} alt="Phil Stubbs" className="bio-img" />
						<div className="bio">
							<p>
								Hey there! I&#39;m Phil, and welcome to my little corner of the Internet. I&#39;m a web
								developer but also a writer, project manager, and runner. I enjoy creating user
								interfaces as well as finding creative, unique ways to improve the usability of new or
								existing web applications. I posted my work to this site to show you my passion of not
								only learning the many tools of web development but also trying to solve problems
								related to designing user interfaces, presenting information, and building applications
								for the web. Another passion of mine is running. When I&#39;m not working on my next web
								development project, I enjoy running in various races and along different trails in
								Minnesota. If you would like to know more, let&#39;s get in touch!
							</p>
						</div>
						<div className="about-card">
							<h2>Web Developer</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus nobis quas velit.
								Distinctio, nam. Obcaecati dolore debitis tempore repellat. Iure exercitationem laborum
								corrupti perspiciatis, ad voluptate odio cum. Sunt.
							</p>
						</div>
						<div className="about-card">
							<h2>Project Manager</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto a, ex ipsum
								magnam similique nostrum. Tenetur, quisquam rem earum, blanditiis reprehenderit dolore
								beatae veniam deserunt quis nobis, ut optio?
							</p>
						</div>
						<div className="about-card">
							<h2>Writer</h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo sequi qui,
							tenetur adipisci impedit illo pariatur ducimus magni? Blanditiis dignissimos aliquid
							excepturi quidem ducimus exercitationem architecto natus necessitatibus beatae.
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default About;
