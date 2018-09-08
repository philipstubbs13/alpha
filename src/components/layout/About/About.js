import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
						<h1 className="lg-heading">About Me</h1>
						<h2 className="sm-heading">Let me tell you my story...</h2>
					</header>
					<main className="about-main">
						<img src={bioImage} alt="Phil Stubbs" className="bio-img" />
						<div className="bio">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa eaque nesciunt!
							Odio, ipsum labore. Ab enim officia aspernatur quas, impedit harum maiores omnis soluta iste
							nulla quidem dolores, corrupti nemo. Nisi debitis accusamus a accusantium, repudiandae
							nostrum quas veritatis?
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
