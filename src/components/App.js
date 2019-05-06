

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// import custom history file in order to
// circumvent automatic history via BrowserRouter
import history from '../history';

import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import WebList from './web/WebList';
import ContactView from './contact/ContactView';
import ImageList from './visual/ImageList';
import ArticleList from './writing/ArticleList';

import '../css/App.css';
import '../css/Content.css';
import '../css/Footer.css';
import '../css/NavBar.css';
import '../css/ImageList.css';
import '../css/ArticleCard.css';
import '../css/ArticleList.css';
import '../css/Contact.css';



const App = () => {

	return (
		<div>

			<Router history={ history }>

				<NavBar />

				<div className="container">

					<Switch>
						<Route path="/" exact component={ Home } />
						<Route path="/web" component={ WebList } />
						<Route path="/visual" component={ ImageList } />
						<Route path="/writing" component={ ArticleList } />
						<Route path="/contact" component={ ContactView } />
					</Switch>

				</div>

				<Footer />

			</Router>
				
		</div>
	);

};



export default App;



