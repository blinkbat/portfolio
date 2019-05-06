


import React from 'react';
import { Link } from 'react-router-dom';



class NavBar extends React.Component {

	render() {
		return (

			<div className="nav">

				<Link to="/" className="nav-header">
					DAVID BENNETT
				</Link>

				<div className="nav-links">

					<Link to="/" className="nav-item">
						home
					</Link>
					
					<Link to="/web" className="nav-item">
						web
					</Link>

					<Link to="/visual" className="nav-item">
						visual
					</Link>

					<Link to="/writing" className="nav-item">
						writing
					</Link>

					<Link to="/contact" className="nav-item">
						contact
					</Link>

				</div>

				<button className="hamburger" onClick={ () => { alert('hi'); } }>
					<i className="fas fa-ellipsis-v"></i>
				</button>

			</div>

		);
	}

}



export default NavBar;





