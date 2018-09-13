// import React
import React, { Component } from 'react';
// import react-router-dom for linking.
import { Link } from 'react-router-dom';
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
									<h2>Apps Built</h2>
									<p>What I'm building</p>
								</div>
								<div className="resume-section-content">
									<p>To see what I have built or am currently building, check out my work.</p>
									<Link to="/work" className="resume-work-link">
										My Work
									</Link>
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
											<div className="tools-list">
												<div className="tool">HTML</div>
												<div className="tool">CSS</div>
												<div className="tool">JavaScript</div>
												<div className="tool">React</div>
												<div className="tool">Materialize</div>
												<div className="tool">Bootstrap</div>
												<div className="tool">jQuery</div>
												<div className="tool">Material UI</div>
												<div className="tool">Semantic UI</div>
												<div className="tool">Handlebars</div>
												<div className="tool">PrimeReact</div>
											</div>
										</div>
										<div className="tools-subsection">
											<h2>Back End</h2>
											<div className="tools-list">
												<div className="tool">Node.js</div>
												<div className="tool">MongoDB</div>
												<div className="tool">Firebase</div>
												<div className="tool">Express</div>
												<div className="tool">MySQL</div>
												<div className="tool">APIs</div>
												<div className="tool">JSON</div>
												<div className="tool">REST</div>
												<div className="tool">Sequelize</div>
												<div className="tool">Mongoose</div>
											</div>
										</div>
										<div className="tools-subsection">
											<h2>Version Control</h2>
											<div className="tools-list">
												<div className="tool">GIT</div>
												<div className="tool">GitHub</div>
												<div className="tool">Subversion</div>
												<div className="tool">Visual Studio</div>
											</div>
										</div>
										<div className="tools-subsection">
											<h2>Technical Writing</h2>
											<div className="tools-list">
												<div className="tool">DITA</div>
												<div className="tool">XMetaL</div>
												<div className="tool">Oxygen</div>
												<div className="tool">Arbortext</div>
												<div className="tool">Acrolinx</div>
												<div className="tool">SDL Publication Manager</div>
												<div className="tool">Framemaker</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="resume-section">
								<div className="resume-section-title">
									<h2>Education</h2>
									<p>My studies</p>
								</div>
								<div className="resume-section-content">
									<div className="education-section-content">
										<div className="education-subsection">
											<h2>Full Stack Web Development Certificate</h2>
											<ul>
												<li>University of Minnesota</li>
												<li>Completed May 2018</li>
											</ul>
										</div>
										<div className="education-subsection">
											<h2>B.S. in Scientific and Technical Communication</h2>
											<ul>
												<li>University of Minnesota</li>
												<li>Graduated August 2013</li>
												<li>
													<b>GPA 3.974</b>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="resume-section">
								<div className="resume-section-title">
									<h2>Work Experience</h2>
									<p>Where I've been</p>
								</div>
								<div className="resume-section-content">
									<div className="work-section-content">
										<div className="work-subsection">
											<h2>
												<b>Medtronic</b> | Technical Writer | Mounds View, MN | 2017 - Present
											</h2>
											<ul>
												<li>
													Build and update the online help and user documentation for the
													Paceart Optima System (a patient and device management software
													application).
												</li>
												<li>
													Collaborate with engineering and human factors to create a patient
													manual for a home remote monitor that receives information from a
													patient's heart device and relays that information to the patient's
													doctor.
												</li>
												<li>
													● Work closely with development and human factors to update the
													online help for the Reveal LINQ Mobile Manager app (an app used by
													clinics to interrogate a patient's implanted heart monitor).
												</li>
											</ul>
										</div>
										<div className="work-subsection">
											<h2>
												<b>Oracle</b> | Technical Writer | Nashua, NH | 2014 - 2016
											</h2>
											<ul>
												<li>
													Used DITA and CCMS authoring tools, such as Arbortext and SDL
													Publication Manager, to create and develop documentation that helps
													users install, configure, and effectively use Oracle software.
												</li>
												<li>
													Ensured deliverables were accurate and complete by testing the
													documents for each release.
												</li>
												<li>
													Researched and analyzed information about a new product or feature
													by interviewing key subject matter experts and working hands-on with
													the product to quickly learn technical concepts.
												</li>
												<li>
													Established good working relationships with team members and
													contacts in development, quality assurance, and product management
													by regularly communicating project status each sprint.
												</li>
											</ul>
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
