import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CSS
import './Work.css';
// import images
import Swag from '../../../images/swag.png';
import HealthTracker from '../../../images/healthtracker2.png';
import Scraper from '../../../images/scraper.png';
import ClickMe from '../../../images/clickme2.png';
import MyCookingAssistant from '../../../images/pizza2.png';
import SequelBurger from '../../../images/sequelburger2.png';
import AdoptMe from '../../../images/adoptme.png';
import GifFinder from '../../../images/giffinder.PNG';
import Hangman from '../../../images/hangman3.png';
import Carpool from '../../../images/carpool.png';
import Burger from '../../../images/burger2.png';
import Bamazon from '../../../images/bamazon3.jpg';
import Crystal from '../../../images/crystal2.png';
import Liri from '../../../images/twitter.jpg';
import StarWars from '../../../images/starwars2.png';
import Trivia from '../../../images/stadium.jpg';
import ConstructorHangman from '../../../images/skyline.jpg';
import TrainBuilder from '../../../images/mytrainbuilder.png';
import ReactNews from '../../../images/news2.png';

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
						<div className="project">
							<img src={Swag} alt="running with swag website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={HealthTracker} alt="HealthTracker website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={Scraper} alt="Web scraper website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={ClickMe} alt="ClickMe game website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={MyCookingAssistant} alt="Cooking website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={SequelBurger} alt="Sequel burger website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={AdoptMe} alt="pet match website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={GifFinder} alt="Gif finding website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={Hangman} alt="Hangman game website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={Carpool} alt="Carpool matching website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={Bamazon} alt="Bamazon website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={Burger} alt="Burger website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={Crystal} alt="Crystal Collectors game website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={Liri} alt="Liri website" className="project-image" />
							<div className="live-link project-btn">
								{' '}
								<i className="far fa-eye" />
								Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={StarWars} alt="Star wars role playing game website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={Trivia} alt="Super bowl trivia game website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={ConstructorHangman} alt="Constructor Hangman website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={TrainBuilder} alt="Train schedule builder website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
						<div className="project">
							<img src={ReactNews} alt="React news website" className="project-image" />
							<div className="live-link project-btn">
								<i className="far fa-eye" /> Live
							</div>
							<div className="project-link project-btn">
								<i className="fab fa-github" /> GitHub
							</div>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default Work;
