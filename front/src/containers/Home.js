import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Films from '../components/Films';
import TenMostPopular from '../components/TenMostPopular';


class Home extends Component {

	render() {
    
		return (
			<div className="container">
				<div className="secondtitle">
					<h2><span role="img" aria-label="Pop corn"> 🍿 </span>Home<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
				</div>
				<nav>
					<div className="col-xs-10">
						<NavLink exact to="/" activeStyle={{textDecoration: 'underline'}} className="navlink">Home</NavLink>
						<NavLink to="/genres" activeStyle={{textDecoration: 'underline'}} className="navlink">Recommendations by genre</NavLink>
						<NavLink to="/contact" activeStyle={{textDecoration: 'underline'}} className="navlink">Contact</NavLink>
					</div>
              	</nav>
				<h3>CineWild the reference site of the cinema !</h3>
				<Films/>
				<TenMostPopular/>
			</div>
			
		);
	}
}

export default Home;