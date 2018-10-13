import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMessageSent: false,
			name: '',
			email: '',
			message: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			isMessageSent: false,
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault()
		this.setState({
			isMessageSent: true,
			name: '',
			email: '',
			message: ''
		});
	}

	render() {
		if(!this.state.isMessageSent) {
			return (
				<div>
					<h1>Interested in working together?</h1>
					<hr />
					<form onSubmit={this.handleSubmit}>
					<p>Fill out the form below with your info and I will be sure to respond within a few days!</p>
						<input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
						<input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
						<textarea type="text" name="message" placeholder="tell me about your project..." value={this.state.message} onChange={this.handleChange} />
						<input type="submit" value="Submit" />
					</form>
				</div>
			)
		} else {
			return <h1>woo!</h1>
		}
	}
}

export default Contact;