

import React from 'react';



const Footer = props => {

	const thisYear = new Date().getYear() + 1900;

	return (
		<div className="footer">

			<p>
				&copy; { thisYear } &nbsp; <strong>/</strong> &nbsp;
			</p>

			<p> 
				Made with <strong>&hearts;</strong> in Miami &nbsp; <strong>/</strong> &nbsp; 
			</p>
			
			<div>

			<a 
					href="https://github.com/blinkbat"
					target="_blank" 
					rel="noopener noreferrer"
			>
				<i className="fab fa-github"></i>
			</a>

				&nbsp; 

			<a 
					href="https://linkedin.com/in/david-bennett-123012ba/" 
					target="_blank" 
					rel="noopener noreferrer"
			>
				<i className="fab fa-linkedin"></i> 
			</a>

				&nbsp; 

			<a 
				href="https://instagram.com/dbennettart" 
				target="_blank" 
				rel="noopener noreferrer"
			>
				<i className="fab fa-instagram"></i>
			</a>

			</div>

		</div>
	);

}



export default Footer;



