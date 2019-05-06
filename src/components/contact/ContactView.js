

import React from 'react';

import ContactCard from './ContactCard';
import ContactForm from './ContactForm';



const ContactView = props => {

	return (
		<div className="flex">
			<ContactCard />
			<ContactForm />
			<div style={{ clear: "both" }}></div>
		</div>
	);

}



export default ContactView;


