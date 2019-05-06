
// dependencies
import React from 'react';

// components etc
import ImageCard from './ImageCard';

import visualData from './visualData';




const ImageList = props => {

	// map props.images into returns
	// destructured params obj = take only what we need from the response obj
	const images = visualData.map( image => {

		// key is attached to ROOT elements in a returned list
		// if we had each item wrapped in a div, key would be props of the div
		return <ImageCard key={ image.id } image={ image } />;

	});


	return( 
		<div>
			<div className="image-list">{ images }</div>
		</div>
	);

}



export default ImageList;