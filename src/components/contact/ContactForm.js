

import React from 'react';

// TODO: use redux-form on this pg


class ContactForm extends React.Component {


	renderContent() {

		return (

			<div>

				<div className="rotate-inv">
					<h2><strong>
						<i 
							className="far fa-paper-plane"
							style={{ display: 'block', padding: '10px' }}
						></i>
						mail me
					</strong></h2>
				</div>
					<form>
						<label>email</label>
						<input type="text" />

						<label>message</label>
						<textarea />

						<input type="button" value="submit" />
					</form>

			</div>

		);

	}

	render() {
		return (

			<div className="contact-form">
				{ this.renderContent() }
			</div>

		);
	}

}

export default ContactForm;



