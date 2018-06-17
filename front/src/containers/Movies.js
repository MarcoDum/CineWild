import React, { Component } from 'react';
import Animation from '../components/Animation';
import Comedy from '../components/Comedy';
import Adventure from '../components/Adventure';
import { NavLink, Link } from 'react-router-dom';

class Movies extends Component {

	render() {
    
		return (
			<div className="container">
				<h2><span role="img" aria-label="Pop corn"> 🍿 </span>Recommandations by genre<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
				<div className="col-xs-10">
						<NavLink exact to="/" activeStyle={{textDecoration: 'underline'}} className="navlink">Home</NavLink>
						<NavLink to="/genres" activeStyle={{textDecoration: 'underline'}} className="navlink">Recommendations by genre</NavLink>
						<NavLink to="/recommendations" activeStyle={{textDecoration: 'underline'}} className="navlink">Recommendations by year</NavLink>
						<NavLink to="/contact" activeStyle={{textDecoration: 'underline'}} className="navlink">Contact</NavLink>
				</div>
				<Animation/>
				<Comedy/>
				<Adventure/>
			</div>
		);
	}
}

export default Movies;