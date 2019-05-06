

import React from 'react';



class ContactCard extends React.Component {


	renderContent() {

		return (
			<div>

				<img 
					className="profile" 
					alt="david bennett" 
					src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/27331563_711180916345_6423905605497853564_n.jpg?_nc_cat=102&_nc_ht=scontent-mia3-2.xx&oh=d857c0e9e95f7c94c5d2e9c39986d666&oe=5CF7F766"
				/>

				<div className="rotate" style={{ paddingBottom: '10px' }}>
						<h2><i 
							className="fas fa-laptop-code"
							style={{ display: 'block', padding: '10px' }}
						></i></h2>
					<h2><strong>david a. bennett</strong></h2>
					<h3>full-stack web developer</h3>
				</div>

				<a href="tel:3057984844" className="contact-item">
					<i className="fas fa-phone"></i> 305-798-4844
				</a>

				<a href="mailto:dbennettmiami@gmail.com" className="contact-item">
					<i className="fas fa-envelope"></i> dbennettmiami@gmail.com
				</a>

				<div style={{ marginTop: '10px', borderTop: '1px solid rgba(0,0,0,.1)' }}>

					<a 
						href="https://github.com/blinkbat"
						target="_blank" 
						className="contact-item"
						rel="noopener noreferrer"
					>
						<i className="fab fa-github"></i> github (blinkbat)
					</a>

					<a 
						href="https://instagram.com/dbennettart" 
						target="_blank" 
						className="contact-item"
						rel="noopener noreferrer"
					>
						<i className="fab fa-instagram"></i> instagram (dbennettart)
					</a>

					<a 
						href="https://linkedin.com/in/david-bennett-123012ba/" 
						target="_blank" 
						className="contact-item"
						rel="noopener noreferrer"
					>
						<i className="fab fa-linkedin"></i> linkedin
					</a>

				</div>

			</div>
		);

	}

	render() {
		return (

			<div className="contact-card">
				{ this.renderContent() }
			</div>

		);
	}

} // end class



export default ContactCard;



