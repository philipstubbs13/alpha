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
// import resume
import ResumePDF from '../../../resume.pdf';

const frontEndTools = [
	{
		id: 0,
		tool: 'HTML',
	},
	{
		id: 1,
		tool: 'CSS',
	},
	{
		id: 2,
		tool: 'JavaScript',
	},
	{
		id: 3,
		tool: 'React',
	},
	{
		id: 4,
		tool: 'jQuery',
	},
	{
		id: 5,
		tool: 'Material UI',
	},
	{
		id: 6,
		tool: 'Semantic UI',
	},
	{
		id: 7,
		tool: 'Handlebars',
	},
	{
		id: 8,
		tool: 'Handlebars',
	},
	{
		id: 9,
		tool: 'PrimeReact',
	},
];

const backEndTools = [
	{
		id: 0,
		tool: 'Node.js',
	},
	{
		id: 1,
		tool: 'MongoDB',
	},
	{
		id: 2,
		tool: 'Firebase',
	},
	{
		id: 3,
		tool: 'Express',
	},
	{
		id: 4,
		tool: 'APIs',
	},
	{
		id: 5,
		tool: 'MySQL',
	},
	{
		id: 6,
		tool: 'JSON',
	},
	{
		id: 7,
		tool: 'REST',
	},
	{
		id: 8,
		tool: 'Sequelize',
	},
	{
		id: 9,
		tool: 'Mongoose',
	},
];

const versionControlTools = [
	{
		id: 0,
		tool: 'GIT',
	},
	{
		id: 1,
		tool: 'GitHub',
	},
	{
		id: 2,
		tool: 'Subversion',
	},
	{
		id: 3,
		tool: 'Visual Studio',
	},
];

const techWritingTools = [
	{
		id: 0,
		tool: 'DITA',
	},
	{
		id: 1,
		tool: 'XMetaL',
	},
	{
		id: 2,
		tool: 'Oxygen',
	},
	{
		id: 3,
		tool: 'Acrolinx',
	},
	{
		id: 4,
		tool: 'Arbortext',
	},
	{
		id: 5,
		tool: 'Framemaker',
	},
	{
		id: 6,
		tool: 'SDL Publication Manager',
	},
];

const expertise = [
	{
		id: 0,
		skill: 'Advanced CSS',
	},
	{
		id: 1,
		skill: 'JavaScript',
	},
	{
		id: 2,
		skill: 'React Apps',
	},
	{
		id: 3,
		skill: 'Project Management',
	},
	{
		id: 4,
		skill: 'User Centered Design',
	},
	{
		id: 5,
		skill: 'Databases',
	},
];

class Resume extends Component {
	render() {
		return (
			<div>
				<div className="resume">
					<div className="resume-container">
						<a href={ResumePDF} target="_blank" rel="noopener noreferrer">
							<i className="fas fa-print fa-2x" />
						</a>
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
										Hi, I'm Phil, a web developer living and working in Minnesota. I build and
										design simple, clean, and unique user interfaces. In particular, I'm passionate
										about finding ways to improve the user experience of the web by learning and
										using the latest web technologies.
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
										{expertise.map(expertise => (
											<div className="expertise-subsection" key={expertise.id}>
												<h2>
													<i className="fas fa-check" />
													&nbsp; {expertise.skill}
												</h2>
											</div>
										))}
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
												{frontEndTools.map(tool => (
													<div className="tool" key={tool.id}>
														{tool.tool}
													</div>
												))}
											</div>
										</div>
										<div className="tools-subsection">
											<h2>Back End</h2>
											<div className="tools-list">
												{backEndTools.map(tool => (
													<div className="tool" key={tool.id}>
														{tool.tool}
													</div>
												))}
											</div>
										</div>
										<div className="tools-subsection">
											<h2>Version Control</h2>
											<div className="tools-list">
												{versionControlTools.map(tool => (
													<div className="tool" key={tool.id}>
														{tool.tool}
													</div>
												))}
											</div>
										</div>
										<div className="tools-subsection">
											<h2>Technical Writing</h2>
											<div className="tools-list">
												{techWritingTools.map(tool => (
													<div className="tool" key={tool.id}>
														{tool.tool}
													</div>
												))}
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
											<h2>Full Stack Web Development</h2>
											<ul>
												<li>University of Minnesota</li>
												<li>Completed May 2018</li>
											</ul>
										</div>
										<div className="education-subsection">
											<h2>Scientific and Technical Communication</h2>
											<ul>
												<li>University of Minnesota</li>
												<li>Graduated August 2013</li>
												<li>Bachelor of Science</li>
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
