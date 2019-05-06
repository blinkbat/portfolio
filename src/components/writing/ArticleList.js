
// dependencies
import React from 'react';

// components etc
import ArticleCard from './ArticleCard';

import writingData from './writingData';


const ArticleList = props => {

	// map props.articles into returns
	const articles = writingData.map( article => {

		// key is attached to ROOT elements in a returned list
		// if we had each item wrapped in a div, key would be props of the div
		return <ArticleCard key={ article.id } article={ article } />;

	});

	return (
		<div>

			<div className="article-list">
				{ articles }

				<div style={{ clear: "both" }}></div>
			</div>
		</div>
	);

}



export default ArticleList;



