import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Recommendations extends Component {

	render() {
    
		return (
			<div className="container">
				
				<h2><span role="img" aria-label="Pop corn"> 🍿 </span>Recommendations by year<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
				<div className="col-xs-10">
						<NavLink exact to="/" activeStyle={{textDecoration: 'underline'}} className="navlink">Home</NavLink>
						<NavLink to="/genres" activeStyle={{textDecoration: 'underline'}} className="navlink">Recommendations by genre</NavLink>
						<NavLink to="/recommendations" activeStyle={{textDecoration: 'underline'}} className="navlink">Recommendations by year</NavLink>
						<NavLink to="/contact" activeStyle={{textDecoration: 'underline'}} className="navlink">Contact</NavLink>
				</div>
				<Link to="/year/1987" exact="true">1987</Link>
				<br/>
				<Link to="/year/1988" exact="true">1988</Link>
				<br/>
				<Link to="/year/1987" exact="true">1989</Link>
				<br/>
				<Link to="/year/1987" exact="true">1990</Link>
				<br/>
			</div>
		);
	}
}

export default Recommendations;