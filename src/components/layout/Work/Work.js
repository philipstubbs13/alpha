// import React
import React, { Component } from 'react';
// import CSS for Projects page.
import './Work.css';
// import/require images
const Swag = require('../../../images/swag.png');
const HealthTracker = require('../../../images/healthtracker2.png');
const ClickMe = require('../../../images/clickme2.png');
const MyCookingAssistant = require('../../../images/pizza2.png');
const SequelizedBurger = require('../../../images/sequelburger2.png');
const AdoptMe = require('../../../images/adoptme.png');
const GifFinder = require('../../../images/giffinder.PNG');
const Hangman = require('../../../images/hangman3.png');
const CarpoolBuddy = require('../../../images/carpool.png');
const Bamazon = require('../../../images/bamazon3.jpg');
const AwesomeBurger = require('../../../images/burger2.png');
const CrystalCollectors = require('../../../images/crystal2.png');
const Liri = require('../../../images/twitter.jpg');
const StarWars = require('../../../images/starwars2.png');
const TriviaGame = require('../../../images/stadium.jpg');
const ConstructorHangman = require('../../../images/skyline.jpg');
const TrainBuilder = require('../../../images/mytrainbuilder.png');
const ReactSearch = require('../../../images/news2.png');
const BasketballScraper = require('../../../images/scraper.png');

// Create an array called projects that I can map over
// to render all of my projects to the projects page.
// This keeps the code DRY.
const projects = [
	{
		id: 0,
		name: 'Running with Swag',
		live: 'https://running-with-swag.firebaseapp.com/',
		github: 'https://github.com/philipstubbs13/running-with-swag',
		image: Swag,
	},
	{
		id: 1,
		name: 'HealthTracker',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: HealthTracker,
	},
	{
		id: 2,
		name: 'ClickMe',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: ClickMe,
	},
	{
		id: 3,
		name: 'MyCookingAssistant',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: MyCookingAssistant,
	},
	{
		id: 4,
		name: 'Sequelized Burger',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: SequelizedBurger,
	},
	{
		id: 5,
		name: 'AdoptMe',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: AdoptMe,
	},
	{
		id: 6,
		name: 'Athlete hall of gifs',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: GifFinder,
	},
	{
		id: 7,
		name: 'Hangman',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: Hangman,
	},
	{
		id: 8,
		name: 'Carpool Buddy',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: CarpoolBuddy,
	},
	{
		id: 9,
		name: 'Bamazon',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: Bamazon,
	},
	{
		id: 10,
		name: 'Awesome Burger',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: AwesomeBurger,
	},
	{
		id: 11,
		name: 'Crystal Collectors',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: CrystalCollectors,
	},
	{
		id: 12,
		name: 'LIRI',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: Liri,
	},
	{
		id: 13,
		name: 'Star Wars RPG Game',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: StarWars,
	},
	{
		id: 14,
		name: 'Trivia Game',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: TriviaGame,
	},
	{
		id: 15,
		name: 'Constructor Hangman',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: ConstructorHangman,
	},
	{
		id: 16,
		name: 'myTrainBuilder',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: TrainBuilder,
	},
	{
		id: 17,
		name: 'New York Times React Search',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: ReactSearch,
	},
	{
		id: 18,
		name: 'BasketballScraper',
		live: 'https://myhealthtracker.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/MedLog',
		image: BasketballScraper,
	},
];

class Work extends Component {
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
