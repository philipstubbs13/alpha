// React related imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Internal components
import Header from '../../Header';
import Footer from '../../Footer';
import MenuButton from '../../MenuButton';

// import CSS
import './Resume.css';
// import resume pdf
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
  {
		id: 10,
		tool: 'AWS',
	},
  {
		id: 11,
		tool: 'GraphQL',
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
		skill: 'React',
	},
	{
		id: 1,
		skill: 'JavaScript',
	},
	{
		id: 2,
		skill: 'Node',
	},
	{
		id: 3,
		skill: 'Project Management',
	},
	{
		id: 4,
		skill: 'CSS',
	},
	{
		id: 5,
		skill: 'NoSQL',
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
              subHeading="Web Engineer, Project Manager, and Writer"
            />
            <main className="resume-main">
              <div className="resume-section">
                <div className="resume-section-title">
                  <h2><i className="fas fa-code" /> Intro</h2>
                  <p>What I&#39;m all about</p>
                </div>
                <div className="resume-section-content">
                  <p>
										Hi, I&#39;m Phil, a web engineer living and working in Minnesota.
                    I build and design simple, clean, and unique user interfaces.
                    In particular, I&#39;m passionate
										about finding ways to improve the user experience of the
                    web by learning and using the latest web technologies.
                  </p>
                </div>
              </div>
              <div className="resume-section">
                <div className="resume-section-title">
                  <h2><i className="fab fa-react" /> Expertise</h2>
                  <p>What I&#39;m good at</p>
                </div>
                <div className="resume-section-content">
                  <div className="expertise-section-content">
                    {expertise.map(expertiseItem => (
                      <div className="expertise-subsection" key={expertiseItem.id}>
                        <h2>
                          <i className="fas fa-check" />{' '}
                          {expertiseItem.skill}
                        </h2>
                      </div>
										))}
                  </div>
                </div>
              </div>

              <div className="resume-section">
                <div className="resume-section-title">
                  <h2><i className="fas fa-mobile-alt" /> Apps Built</h2>
                  <p>What I&#39;m building</p>
                </div>
                <div className="resume-section-content">
                  <p>To see what I have built or am currently building, check out my <Link className="resume-work-link" to="/work">my work</Link>.</p>
                </div>
              </div>
              <div className="resume-section">
                <div className="resume-section-title">
                  <h2><i className="fas fa-wrench" /> Tools</h2>
                  <p>Things I&#39;m learning</p>
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
                  <h2><i className="fas fa-graduation-cap" /> Education</h2>
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
                  <h2><i className="fas fa-globe-americas" /> Work Experience</h2>
                  <p>Where I&#39;ve been</p>
                </div>
                <div className="resume-section-content">
                  <div className="work-section-content">
                    <div className="work-subsection">
                      <h2>
                        <b>Parallax</b> | Software Engineer | Edina, MN | 2019 - Present
                      </h2>
                      <ul>
                        <li>
                            Write and style React components using Storybook to meet
                            the requirements of the mocks, fulfill the user stories,
                            and create a reusable, easy to maintain component library.
                        </li>
                        <li>
                          Follow the test driven development (TDD) process by writing
                          unit tests with Jest, helping identify errors quickly, reduce
                          time spent on rework, and increase the confidence and quality
                          of the application.
                        </li>
                        <li>
                          Wire up the components from the component library into the
                          software application using React Hooks for managing state
                          inside React functional components and using an internal API
                          for reading and writing data to and from Cloud Firestore
                          (a NoSQL cloud database).
                        </li>
                        <li>
                          Collaborate with team members by giving status updates during
                          daily stand ups, communicating any roadblocks identified during
                          the two week sprint, working with the right people to resolve
                          roadblocks quickly, and participating in retrospectives at the
                          end of each sprint to identify what went well and what the team
                          can improve going forward.
                        </li>
                        <li>Develop charts using React AnyChart to help users visualize
                          data within the application.
                        </li>
                      </ul>
                    </div>
                    <div className="work-subsection">
                      <h2>
                        <b>Medtronic</b> | Technical Writer | Mounds View, MN | 2017 - 2019
                      </h2>
                      <ul>
                        <li>
                          Built and updated the online help and user documentation for the
                          Paceart Optima System (a patient and device management
                          software application).
                        </li>
                        <li>
													Collaborated with engineering and human factors to create a patient
													manual for a home remote monitor that receives information from a
													patient&#39;s heart device and relays that information to
                          the patient&#39;s doctor.
                        </li>
                        <li>
													Worked closely with development and human factors to update the
													online help for Reveal LINQ Mobile Manager (an app used by
													clinics to interrogate a patient&#39;s implanted heart monitor).
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
