import React from 'react';
import { Link } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { bindActionCreators } from 'redux';
import { getAllFilms } from '../actions/films';
import { connect } from 'react-redux';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  imgfilm: {
    width: "150px",
    height: "200px",
  }
};

class Films extends React.Component {

  componentDidMount() {
    this.props.getAllFilms();
  }

  render(){
    return(
    <div style={styles.root}>
        {this.props.films.map((film, index) => (
            <div key={film.id} className="col-xs-6">
              <h4>{film.name}</h4>
              <img style={styles.imgfilm} src={`/img/${film.img}`}/>
              <p className = "text-left"><span className="bold">Release date :</span> {film.date}</p>
              <p className = "text-left"><span className="bold">Description :</span> {film.description} </p>
              <p className = "text-left"><span className="bold">Genre : </span>{film.sort}</p>
              <Link to={`/film/${film.id}`} exact="true">Discover this movie</Link>
            </div>))}
    </div>
    )
  }
}
// <p className = "text-left"><span className="bold">Description</span> {film.description} </p>

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAllFilms }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Films)