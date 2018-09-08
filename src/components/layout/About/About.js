import React, { Component } from 'react';
// import CSS
import './About.css';
// import bio image
import bioImage from '../../../images/me.jpg';

class About extends Component {
	render() {
		return (
			<div className="about">
				<div className="about-container">
					<header className="header">
						<h1 className="lg-heading">
							About <span className="heading-second-word">Me</span>
						</h1>
						<h2 className="sm-heading">Let me tell you my story...</h2>
					</header>
					<main className="about-main">
						<img src={bioImage} alt="Phil Stubbs" className="bio-img" />
						<div className="bio">
							<p>
								As a kid, I liked challenging myself to explore new opportunities whether it be learning
								another language, learning how to play piano, trying out for the basketball team despite
								not being as tall as other players, or striving to be one of the best chess players at
								school. I always found different ways to solve problems whether it be figuring out how
								to solve a difficult problem in math class, how to be a couple moves ahead of my chess
								opponent, or how to be an efficient three point shooter on the basketball court.
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
