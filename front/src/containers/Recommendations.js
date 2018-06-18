import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../App.css";

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
				<hr />
				<Link to="/year/1987" exact="true" className="year">1987</Link>
				<hr />
				<br/>
				<Link to="/year/1988" exact="true" className="year">1988</Link>
				<hr />
				<br/>
				<Link to="/year/1987" exact="true" className="year">1989</Link>
				<hr />
				<br/>
				<Link to="/year/1987" exact="true" className="year">1990</Link>
				<hr />
				<br/>
			</div>
		);
	}
}

export default Recommendations;