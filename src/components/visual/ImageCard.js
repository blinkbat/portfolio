

import React from 'react';


class ImageCard extends React.Component {

	constructor( props ) {
		super( props );

		// state init
		this.state = { spans: 0 };

		// create image ref for DOM manipulation
		this.imageRef = React.createRef();

	}


	// on component load...
	componentDidMount() {
		// listen for image load, then apply setSpans()
		this.imageRef.current.addEventListener( 'load', this.setSpans );
	}



	// arrow function for correct 'this' binding of callback
	setSpans = () => {
		// pull off height property
		const height = this.imageRef.current.clientHeight;

		// divide image height by row height (css grid-auto-rows), + 1 
		const spans = Math.ceil( height + 15 );

		// output the resulting span amount to state
		this.setState({ spans: spans });
	}


	render() {

		// extract from props
		const { description, url } = this.props.image;

		return (

			// style div according to setSpans
			<div style={{ gridRowEnd: `span ${ this.state.spans }` }}>
				<img alt={ description } src={ url } ref={ this.imageRef } /> 
			</div>

		);

	}



}



export default ImageCard;




