import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { NavLink, Link } from 'react-router-dom';
import Axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			mail: '',
			subject: '',
			message: '',
			redirect: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange (event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		Axios
		.post('http://localhost:3000/notify', {
			name: this.state.name,
			mail: this.state.mail,
			subject: this.state.subject,
			message : this.state.message
		})
		.then(() => this.setState({ redirect: true }))
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {

		const { redirect } = this.state;
		if (redirect) {
			return (
				<Redirect to="/"/>
			)
		}
    
		return (
			<div className="container">
			
				<h2><span role="img" aria-label="Pop corn"> 🍿 </span>Contact<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
				<div className="col-xs-10">
						<NavLink exact to="/" activeStyle={{textDecoration: 'underline'}} className="navlink">Home</NavLink>
						<NavLink to="/genres" activeStyle={{textDecoration: 'underline'}} className="navlink">Recommendations by genre</NavLink>
						<NavLink to="/recommendations" activeStyle={{textDecoration: 'underline'}} className="navlink">Recommendations by year</NavLink>
						<NavLink to="/contact" activeStyle={{textDecoration: 'underline'}} className="navlink">Contact</NavLink>
				</div>
				<p className="highlight">If you want to contact me, please fill this form. I will be very happy to hear from you soon !</p>

				<form className="col-xs-8 col-xs-offset-2" onSubmit={this.handleSubmit}>
					<TextField
						id="search"
						label="Name"
						type="search"
						className="textField"
						margin="normal"
					/>
					<br>
					</br>
					<TextField
						id="search"
						label="Email"
						type="search"
						className="textField"
						margin="normal"
					/>
					<br>
					</br>
					<TextField
						id="multiline-flexible"
						label="Message"
						multiline
						rowsMax="4"
						className="textField"
						margin="normal"
        			/>
					<br>
					</br>
					<hr/>
					<Button variant="contained" className="button">
						Send
					</Button>
					<p className="text-left">All fields are mandatory !</p>
				</form> 
			</div>
		);
	}
}

export default Contact;