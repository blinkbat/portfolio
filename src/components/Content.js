

// import React from 'react';
// import { connect } from 'react-redux';

// import ImageList from './visual/ImageList';
// import ArticleList from './writing/ArticleList';
// import ContactCard from './contact/ContactCard';
// import ContactForm from './contact/ContactForm';


// class Content extends React.Component {

	
// 	// conditional rendering
// 	renderContent() {

// 		const page = this.props.page;

// 		////////////////////// HOME //////////////////////

// 		if( page === 'home' ){
// 			return <div><h1>HOME!</h1></div>;
// 		}



// 		////////////////////// WEB //////////////////////

// 		if( page === 'web' ){
// 			return <div>dat webby content</div>;
// 		}



// 		////////////////////// VISUAL //////////////////////

// 		if( page === 'visual' ){

// 			const imageArr = [

// 				{ url: 'https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg', description: 'roofless records showcase', id: '1' },
// 				{ url: 'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1', description: 'roofless records showcase', id: '2' },
// 				{ url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg', description: 'roofless records showcase', id: '3' },
// 				{ url: 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', description: 'roofless records showcase', id: '41' },
// 				{ url: 'https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg', description: 'roofless records showcase', id: '15' },
// 				{ url: 'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1', description: 'roofless records showcase', id: '551' },
// 				{ url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg', description: 'roofless records showcase', id: '15435' },
// 				{ url: 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', description: 'roofless records showcase', id: '3451' },
// 				{ url: 'https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg', description: 'roofless records showcase', id: '3453451' }
// 			];

// 			const shuffleArr = array => {
// 			  var currentIndex = array.length, temporaryValue, randomIndex;

// 			  // While there remain elements to shuffle...
// 			  while ( 0 !== currentIndex ) {

// 			    // Pick a remaining element...
// 			    randomIndex = Math.floor( Math.random() * currentIndex );
// 			    currentIndex -= 1;

// 			    // And swap it with the current element.
// 			    temporaryValue = array[ currentIndex ];
// 			    array[ currentIndex ] = array[ randomIndex ];
// 			    array[ randomIndex ] = temporaryValue;
// 			  }

// 			  return array;
// 			}

// 			shuffleArr( imageArr );



// 			// return statement

// 			return <div style={{ textAlign: 'center' }} >
// 				<ImageList images={ imageArr } />
// 			</div>;
// 		}



// 		////////////////////// WRITING //////////////////////

// 		if( page === 'writing' ){

// 			const articleArr = [

// 				{ 
// 					url: 		"https://www.miaminewtimes.com/music/things-to-do-miami-international-noise-conference-2019-at-churchills-pub-february-5-through-february-9-11064079",
// 					image: 	"https://images1.miaminewtimes.com/imager/u/490x277/11064084/international_noise_conference_by_alex_markow-00261.jpg",
// 					title: 	"For International Noise Conference's 16th Year, the Only Constant Is Change",
// 					id: 1
// 				},
// 				{ 
// 					url: 		"https://www.miaminewtimes.com/arts/things-to-do-miami-faena-festival-during-art-basel-december-3-9-10891302",
// 					image: 	"https://images1.miaminewtimes.com/imager/u/745xauto/10891316/amerika.jpg",
// 					title: 	"Inaugural Faena Festival Asks, \"What Is America?\"",
// 					id: 2
// 				},
// 				{ 
// 					url: 		"https://www.miaminewtimes.com/music/things-to-do-miami-pictureplane-at-229-december-8-10927473",
// 					image: 	"https://images1.miaminewtimes.com/imager/u/745xauto/10928927/1.jpg",
// 					title: 	"Pictureplane Embraces Degeneracy at 229",
// 					id: 3
// 				},
// 				{ 
// 					url: 		"https://www.miaminewtimes.com/arts/things-to-do-miami-eddie-izzard-at-arsht-center-october-12-10810600",
// 					image: 	"https://images1.miaminewtimes.com/imager/u/745xauto/10819076/eddie_izzard_press_credit_amanda_searle.jpg",
// 					title: 	"Eddie Izzard Gets Political",
// 					id: 4
// 				},
// 				{ 
// 					url: 		"https://www.miaminewtimes.com/music/things-to-do-miami-international-noise-conference-2019-at-churchills-pub-february-5-through-february-9-11064079",
// 					image: 	"https://images1.miaminewtimes.com/imager/u/490x277/11064084/international_noise_conference_by_alex_markow-00261.jpg",
// 					title: 	"For International Noise Conference's 16th Year, the Only Constant Is Change",
// 					id: 5
// 				},
// 				{ 
// 					url: 		"https://www.miaminewtimes.com/arts/things-to-do-miami-faena-festival-during-art-basel-december-3-9-10891302",
// 					image: 	"https://images1.miaminewtimes.com/imager/u/745xauto/10891316/amerika.jpg",
// 					title: 	"Inaugural Faena Festival Asks, \"What Is America?\"",
// 					id: 6
// 				},
// 				{ 
// 					url: 		"https://www.miaminewtimes.com/music/things-to-do-miami-pictureplane-at-229-december-8-10927473",
// 					image: 	"https://images1.miaminewtimes.com/imager/u/745xauto/10928927/1.jpg",
// 					title: 	"Pictureplane Embraces Degeneracy at 229",
// 					id: 7
// 				},
// 				{ 
// 					url: 		"https://www.miaminewtimes.com/arts/things-to-do-miami-eddie-izzard-at-arsht-center-october-12-10810600",
// 					image: 	"https://images1.miaminewtimes.com/imager/u/745xauto/10819076/eddie_izzard_press_credit_amanda_searle.jpg",
// 					title: 	"Eddie Izzard Gets Political",
// 					id: 8
// 				},
				
				
// 			];

// 			// return statement

// 			return <div style={{ textAlign: 'center' }} >
// 				<ArticleList articles={ articleArr } />
// 			</div>;
// 		}



// 		////////////////////// CONTACT //////////////////////

// 		if( page === 'contact' ){

// 			return(
// 				<div className="flex">
// 					<ContactCard />
// 					<ContactForm />
// 					<div style={{ clear: "both" }}></div>
// 				</div>
// 			);

// 		}

// 		return <div>{ page }</div>;
// 	}

// 	render() {

// 		return (

// 			<div className="container">
// 			<h1 className="title">{ page }</h1>
// 				{ this.renderContent() }
// 			</div>

// 		);
// 	}



// }

// const mapStateToProps = state => {
// 	console.log( state );
// 	return { page: state.selectedPage };
// }


// export default connect( 
// 	mapStateToProps, 
// 	{ selectPage } 
// )( Content );


