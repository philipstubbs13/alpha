// import React
import React, { Component } from 'react';
// import Header component
import Header from '../../Header';
// import MenuButton component
import MenuButton from '../../MenuButton';
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
		live: 'https://clickme-d27eb.firebaseapp.com/',
		github: 'https://github.com/philipstubbs13/ClickMe',
		image: ClickMe,
	},
	{
		id: 3,
		name: 'MyCookingAssistant',
		live: 'https://longshotauth.firebaseapp.com/',
		github: 'https://github.com/philipstubbs13/Project-Longshot',
		image: MyCookingAssistant,
	},
	{
		id: 4,
		name: 'Sequelized Burger',
		live: 'https://hidden-shelf-25357.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/sequelizedBurger',
		image: SequelizedBurger,
	},
	{
		id: 5,
		name: 'AdoptMeNow',
		live: 'https://pet-match-app.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/PetMatch',
		image: AdoptMe,
	},
	{
		id: 6,
		name: 'Athlete hall of gifs',
		live: 'https://philipstubbs13.github.io/Giphy-API-Project/index.html',
		github: 'https://github.com/philipstubbs13/Giphy-API-Project',
		image: GifFinder,
	},
	{
		id: 7,
		name: 'Hangman',
		live: 'https://philipstubbs13.github.io/Hangman-Game/index.html',
		github: 'https://github.com/philipstubbs13/Hangman-Game',
		image: Hangman,
	},
	{
		id: 8,
		name: 'Carpool Buddy',
		live: 'https://blooming-lowlands-71441.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/FriendFinder',
		image: CarpoolBuddy,
	},
	{
		id: 9,
		name: 'Bamazon',
		live: 'https://github.com/philipstubbs13/Bamazon',
		github: 'https://github.com/philipstubbs13/Bamazon',
		image: Bamazon,
	},
	{
		id: 10,
		name: 'Awesome Burger',
		live: 'https://gentle-caverns-56054.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/burger',
		image: AwesomeBurger,
	},
	{
		id: 11,
		name: 'Crystal Collectors',
		live: 'https://philipstubbs13.github.io/week-4-game/index.html',
		github: 'https://github.com/philipstubbs13/week-4-game',
		image: CrystalCollectors,
	},
	{
		id: 12,
		name: 'LIRI',
		live: 'https://github.com/philipstubbs13/liri-node-app',
		github: 'https://github.com/philipstubbs13/liri-node-app',
		image: Liri,
	},
	{
		id: 13,
		name: 'Star Wars RPG Game',
		live: 'https://philipstubbs13.github.io/Star-Wars-RPG-Game/',
		github: 'https://github.com/philipstubbs13/Star-Wars-RPG-Game',
		image: StarWars,
	},
	{
		id: 14,
		name: 'Trivia Game',
		live: 'https://philipstubbs13.github.io/TriviaGame/index.html',
		github: 'https://github.com/philipstubbs13/TriviaGame',
		image: TriviaGame,
	},
	{
		id: 15,
		name: 'Constructor Hangman',
		live: 'https://github.com/philipstubbs13/constructor-hangman',
		github: 'https://github.com/philipstubbs13/constructor-hangman',
		image: ConstructorHangman,
	},
	{
		id: 16,
		name: 'myTrainBuilder',
		live: 'https://fir-train-scheduler-7f4a9.firebaseapp.com/',
		github: 'https://github.com/philipstubbs13/Firebase-Train-Scheduler',
		image: TrainBuilder,
	},
	{
		id: 17,
		name: 'NYT React Search',
		live: 'https://react-nytimes-search.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/NYT-React-Search',
		image: ReactSearch,
	},
	{
		id: 18,
		name: 'BasketballScraper',
		live: 'https://hoops-scraper.herokuapp.com/',
		github: 'https://github.com/philipstubbs13/NewsScrape',
		image: BasketballScraper,
	},
];

class Work extends Component {
	render() {
		return (
			<div className="work">
				<div className="work-container">
					<MenuButton />
					<Header firstPhrase="My" secondPhrase="Work" subHeading="Here&#39;s what I&#39;m working on..." />
					<main className="work-main">
						{projects.map(project => (
							<div className="project" key={project.id}>
								<img src={project.image} alt={project.name} className="project-image" />
								<div className="project-name">
									<h2>{project.name}</h2>
								</div>
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

// export the Work component so that it can be imported into App.js
// and then rendered to the page.
export default Work;
