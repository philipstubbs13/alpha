import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CSS
import './Work.css';

const projects = [
	{
		id: 0,
		name: 'Running with Swag',
		live: 'https://running-with-swag.firebaseapp.com/',
		github: 'https://github.com/philipstubbs13/running-with-swag',
		image: require('../../../images/swag.png'),
	},
	{
		id: 1,
		name: 'HealthTracker',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/healthtracker2.png'),
	},
	{
		id: 2,
		name: 'ClickMe',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/clickme2.png'),
	},
	{
		id: 3,
		name: 'MyCookingAssistant',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/pizza2.png'),
	},
	{
		id: 4,
		name: 'Sequelized Burger',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/sequelburger2.png'),
	},
	{
		id: 5,
		name: 'AdoptMe',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/adoptme.png'),
	},
	{
		id: 6,
		name: 'Athlete hall of gifs',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/giffinder.PNG'),
	},
	{
		id: 7,
		name: 'Hangman',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/hangman3.png'),
	},
	{
		id: 8,
		name: 'Carpool Buddy',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/carpool.png'),
	},
	{
		id: 9,
		name: 'Bamazon',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/bamazon3.jpg'),
	},
	{
		id: 10,
		name: 'Awesome Burger',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/burger2.png'),
	},
	{
		id: 11,
		name: 'Crystal Collectors',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/crystal2.png'),
	},
	{
		id: 12,
		name: 'LIRI',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/twitter.jpg'),
	},
	{
		id: 13,
		name: 'Star Wars RPG Game',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/starwars2.png'),
	},
	{
		id: 14,
		name: 'Trivia Game',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/stadium.jpg'),
	},
	{
		id: 15,
		name: 'Constructor Hangman',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/skyline.jpg'),
	},
	{
		id: 16,
		name: 'myTrainBuilder',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/mytrainbuilder.png'),
	},
	{
		id: 17,
		name: 'New York Times React Search',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/news2.png'),
	},
	{
		id: 18,
		name: 'BasketballScraper',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: require('../../../images/scraper.png'),
	},
];

class Work extends Component {
	componentDidMount() {
		console.log(projects);
	}

	render() {
		return (
			<div className="work">
				<div className="work-container">
					<header className="header">
						<h1 className="lg-heading">
							My <span className="heading-second-word">Projects</span>
						</h1>
						<h2 className="sm-heading">Here&#39;s what I&#39;m working on...</h2>
					</header>
					<main className="work-main">
						{projects.map(project => (
							<div className="project">
								<img src={project.image} alt={project.name} className="project-image" />
								<a href={project.live} target="_blank" rel="noopener noreferrer">
									<div className="live-link project-btn">
										<i className="far fa-eye" /> Live
									</div>
								</a>
								<a href={project.github} target="_blank" rel="noopener noreferrer">
									<div className="project-link project-btn">
										<i className="fab fa-github" /> GitHub
									</div>
								</a>
							</div>
						))}
						;
					</main>
				</div>
			</div>
		);
	}
}

export default Work;
