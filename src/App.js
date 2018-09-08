// import React
import React, { Component } from 'react';
// import third party routing library to implement navigation within app.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import main app css file.
import './App.css';
// import app layout/pages
import Home from './components/layout/Home';
import About from './components/layout/About';
import Work from './components/layout/Work';
import Contact from './components/layout/Contact';
import Skills from './components/layout/Skills';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/work" component={Work} />
						<Route exact path="/contact" component={Contact} />
						{/* <Route exact path="/skills" component={Skills} /> */}
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
