import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class MovieDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
            movie:[],
            isLoading: true
		};	
	}

	getMovie(){

		Axios
		.get(`http://localhost:3000/${this.props.films.params.id}`)
		.then(response => {
			this.setState({
                movie: response.data, 
                isLoading: false
			});
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	componentDidMount() {
		this.getMovie();
	}

	render() {
        console.log(this.state);
        let content;
        if(this.state.isLoading){
            content = <p>loading</p>;
        } else {
          content=  <div className="container">
            <h2><span role="img" aria-label="Pop corn"> 🍿 </span>{this.state.movie.titre}<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
            <h3>Trailer</h3>
            <div className ="row flex_to_center movieDetail">
                    <div className="col-xs-4">
						<img src={`${this.state.movie.image}`} alt={this.state.movie.titre} width="200vh"/>
					</div>
					<div className="col-xs-6">					
						<p className = "text-left"><span className="bold">Vote average :</span> {this.state.movie.note} </p>
						<p className = "text-left"><span className="bold">Release date :</span> {this.state.movie.date} </p>
                        <p className = "text-left"><span className="bold">Genres :</span>
                            <ul>
                                {this.state.movie.genre}
                            </ul>
                        </p>
                        <p className = "text-left"> <span className="bold">Author :</span>
                            <ul>
                                {this.state.movie.auteur}
                            </ul>
                        </p>
                        <p className = "text-left"><span className="bold">Description :</span>
                            <ul>
                                {this.state.movie.description}
                            </ul>
                        </p>
                        <Link to="/" exact="true">Go back home</Link>
					</div>					
            </div>

        </div>
    
        }
		return (
		    content

		);
	}
}

export default MovieDetail;