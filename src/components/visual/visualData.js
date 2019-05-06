


const imageArr = [

	{ url: 'https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg', description: 'roofless records showcase', id: '1' },
	{ url: 'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1', description: 'roofless records showcase', id: '2' },
	{ url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg', description: 'roofless records showcase', id: '3' },
	{ url: 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', description: 'roofless records showcase', id: '41' },
	{ url: 'https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg', description: 'roofless records showcase', id: '15' },
	{ url: 'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1', description: 'roofless records showcase', id: '551' },
	{ url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg', description: 'roofless records showcase', id: '15435' },
	{ url: 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', description: 'roofless records showcase', id: '3451' },
	{ url: 'https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg', description: 'roofless records showcase', id: '3453451' },
	{ url: 'https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg', description: 'roofless records showcase', id: '12' },
	{ url: 'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1', description: 'roofless records showcase', id: '22' },
	{ url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg', description: 'roofless records showcase', id: '32' },
	{ url: 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', description: 'roofless records showcase', id: '421' },
	{ url: 'https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg', description: 'roofless records showcase', id: '125' },
	{ url: 'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1', description: 'roofless records showcase', id: '5512' },
	{ url: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg', description: 'roofless records showcase', id: '154235' },
	{ url: 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', description: 'roofless records showcase', id: '34251' },
	{ url: 'https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg', description: 'roofless records showcase', id: '34532451' }

];

const shuffleArr = array => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while ( 0 !== currentIndex ) {

    // Pick a remaining element...
    randomIndex = Math.floor( Math.random() * currentIndex );
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[ currentIndex ];
    array[ currentIndex ] = array[ randomIndex ];
    array[ randomIndex ] = temporaryValue;
  }

  return array;
}

shuffleArr( imageArr );

export default imageArr;