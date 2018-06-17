import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class MovieYear extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items:[]
		};
	}

	getYear(){
		Axios
		.get(`http://localhost:3000/${this.props.film.params.date}`)
		.then(response => {
			this.setState({
				items: response.data
			});
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	componentDidMount() {
		this.getYear();
	}

	render() {
		return (
			<div className="popularYear">
				<h2>{this.props.film.params.date}</h2>
			</div>
			

		);
	}
}

export default MovieYear;