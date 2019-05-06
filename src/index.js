

// react imports
import React from 'react';
import ReactDOM from 'react-dom';

// redux imports
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';

// import locals
import App from './components/App';
//import reducers from './reducers';



ReactDOM.render( 

	// redux provider gets passed store made via reducers
	//<Provider store={ createStore( reducers ) }>
		<App />,
	//</Provider>,

	document.querySelector('#root')

);