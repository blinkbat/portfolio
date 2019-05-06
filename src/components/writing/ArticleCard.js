

import React from 'react';



class ArticleCard extends React.Component {

	render() {
		// extract from props
		const { title, image, url } = this.props.article;

		return (

			<div className="article">
				<a 
					href={ url } 
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="article-card">

							<img src={ image } alt={ title } />

							<h2>{ title }</h2>

					</div>
				</a>
			</div>

		);
	}

}



export default ArticleCard;




