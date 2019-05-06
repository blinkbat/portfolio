


import React from 'react';
import { Link } from 'react-router-dom';



class Home extends React.Component {

	render() {
		return (
			<div style={{ padding: '20px' }}>
			
				<h1 className="title">oh hey there.</h1>

				<p style={{ maxWidth: '400px', margin: 'auto' }}>
					this is the portfolio site of <strong>david alexander bennett</strong>,
					a 30ish web developer from sunny miami, florida. above, you can find links to 
					my <Link to="/web">web</Link>, <Link to="/visual">visual arts</Link>, and 
					<Link to="/writing"> writing</Link> portfolios (oh yeah, I do visual art 
					&amp; writing, too). if you have any questions, feel free 
					to <Link to="/contact">contact</Link> me.
				</p>

			</div>
		);
	}

}



export default Home;