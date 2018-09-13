// import React
import React, { Component } from 'react';
// import Resume component
import Header from '../../Header';
// import Footer component
import Footer from '../../Footer';
// import MenuButton component
import MenuButton from '../../MenuButton';
// import CSS
import './Resume.css';

class Resume extends Component {
	render() {
		return (
			<div>
				<div className="resume">
					<div className="resume-container">
						<MenuButton />
						<Header
							firstPhrase="My"
							secondPhrase="Resume"
							subHeading="Web Developer, Project Manager, and Writer"
						/>
						<main className="resume-main">
							<div className="resume-section">
								<div className="resume-section-title">
									<h2>Intro</h2>
									<p>What I'm all about</p>
								</div>
								<div className="resume-section-content">
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, perspiciatis,
										optio, ullam deserunt veritatis impedit eius soluta unde magnam excepturi cumque
										eveniet doloribus? Saepe quasi, quas quisquam iste reprehenderit reiciendis.
									</p>

									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione sed
										nihil rem qui reiciendis vitae! A error aut odit cum dicta! Exercitationem
										praesentium, ut mollitia distinctio et amet numquam?
									</p>
								</div>
							</div>
							<div className="resume-section">
								<div className="resume-section-title">
									<h2>Expertise</h2>
									<p>What I'm good at</p>
								</div>
								<div className="resume-section-content">
									<div className="expertise-section-content">
										<div className="expertise-subsection">
											<h2>Advanced CSS</h2>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo
												consequuntur, totam perferendis quae rem aspernatur ex nam est a
												consectetur quidem ut deserunt commodi, laudantium corporis qui ea
												voluptates.
											</p>
										</div>
										<div className="expertise-subsection">
											<h2>JavaScript</h2>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo
												consequuntur, totam perferendis quae rem aspernatur ex nam est a
												consectetur quidem ut deserunt commodi, laudantium corporis qui ea
												voluptates. consectetur quidem ut deserunt commodi, laudantium corporis
												qui ea voluptates.
											</p>
										</div>
										<div className="expertise-subsection">
											<h2>React Apps</h2>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo
												consequuntur, totam perferendis quae rem aspernatur ex nam est a
												consectetur quidem ut deserunt commodi, laudantium corporis qui ea
												voluptates.
											</p>
										</div>
										<div className="expertise-subsection">
											<h2>Project Management</h2>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo
												consequuntur, totam perferendis quae rem aspernatur ex nam est a
												consectetur quidem ut deserunt commodi, laudantium corporis qui ea
												voluptates.
											</p>
										</div>
										<div className="expertise-subsection">
											<h2>User Centered Design</h2>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo
												consequuntur, totam perferendis quae rem aspernatur ex nam est a
												consectetur quidem ut deserunt commodi, laudantium corporis qui ea
												voluptates. consectetur quidem ut deserunt commodi, laudantium corporis
												qui ea voluptates.
											</p>
										</div>
										<div className="expertise-subsection">
											<h2>Databases</h2>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo
												consequuntur, totam perferendis quae rem aspernatur ex nam est a
												consectetur quidem ut deserunt commodi, laudantium corporis qui ea
												voluptates.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="resume-section">
								<div className="resume-section-title">
									<h2>Tools</h2>
									<p>Things I'm learning</p>
								</div>
								<div className="resume-section-content">
									<div className="tools-section-content">
										<div className="tools-subsection">
											<h2>Front End</h2>
										</div>
										<div className="tools-subsection">
											<h2>Back End</h2>
										</div>
										<div className="tools-subsection">
											<h2>Version Control</h2>
										</div>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Resume;
