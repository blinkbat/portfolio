


import React from 'react';

import WebCard from './WebCard';

import webData from './webData';


const WebList = props => {

	// map props.articles into returns
	const webCards = webData.map( data => {

		// key is attached to ROOT elements in a returned list
		// if we had each item wrapped in a div, key would be props of the div
		return <WebCard key={ data.id } data={ data } />;

	});

	return (
		<div>

			<div className="article-list">
				{ webCards }

				<div style={{ clear: "both" }}></div>
			</div>
		</div>
	);

}



export default WebList;