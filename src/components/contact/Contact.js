import React, { Component } from 'react'

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
				<form onSubmit={this.handleSubmit}>
					<label>Name:</label> 
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
					
					<label>Email:</label>
					<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
					
					<label>Message:</label> 
					<input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
					
					<input type="submit" value="Submit" />
				</form>
			)
		} else {
			return <h1>woo!</h1>
		}
	}
}

export default Contact;