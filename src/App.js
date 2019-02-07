// import React
import React, { Component } from 'react';
// import third party routing library to implement navigation within app.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import main app css file.
import './App.css';
// import google analytics module for react apps.
import ReactGA from 'react-ga';
// import app layout/pages
import Home from './components/layout/Home';
import About from './components/layout/About';
import Work from './components/layout/Work';
import Contact from './components/layout/Contact';
import Resume from './components/layout/Resume';
import Menu from './components/Menu';

function initializeReactGA() {
  console.log('initialize React Google Analytics');
  ReactGA.initialize('UA-134062947-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log(window.location.pathname + window.location.search);
}

class App extends Component {
  componentDidMount() {
    initializeReactGA();
  }

	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/work" component={Work} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/menu" component={Menu} />
						<Route exact path="/resume" component={Resume} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
