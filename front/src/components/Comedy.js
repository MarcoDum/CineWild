import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


class Comedy extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items:[]
		};
	}

	getVideo(){
		Axios
		.get('http://localhost:3000/film')
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
		this.getVideo();
	}

	render() {
		return (
			<div className="popular">
				<h3>Comedy</h3>
                <div className="row flex_to_center_wrap">
                    {this.state.items.map(item => (
                        <div key={item.id} className="col-xs-6">
                            <h4>{item.titre}</h4>
                            <img src={`${item.image}`} alt={item.titre} width="120vw"/>
                            <p className = "text-left"><span className="bold">Vote average :</span> {item.note}</p>
						    <p className = "text-left"><span className="bold">Release date :</span> {item.rdate} </p>
						    <p className="justify">{item.auteur}</p>
							<Link to={`/movie/${item.id}`} exact="true">Discover this movie</Link>
                        </div>)
                        )
                    }
                </div>



			</div>
			

		);
	}
}

export default Comedy;