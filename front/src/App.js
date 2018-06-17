import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink, Link } from 'react-router-dom';
import './App.css';
import logo from './img/logo.png';
import Home from './containers/Home';
import Movies from './containers/Movies';
import Recommendations from './containers/Recommendations';
import Contact from './containers/Contact';
import MovieDetail from './components/MovieDetail';
import MovieYear from './components/MovieYear';

class App extends Component {

  render() {
    return (
      <BrowserRouter>       
        <div>
          <header>
            <div className="container-fluid App-header">
              <h1>CineWild</h1>
              
            </div>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />   
            <Route path="/genres" component={Movies} />
            <Route path="/recommendations" component={Recommendations} />
            <Route path="/contact" component={Contact} />
            <Route path="/movie/:id" component={MovieDetail} />
            <Route path="/year/:year" component={MovieYear} /> 
          </Switch>

          <footer>
            <div className="container-fluid">
              <div className="row flex_to_center">
                <div className="col-xs-2">
                  <Link to="/" exact="true"><img src={logo} alt="logo" id="logo" /></Link>
                </div>
                <div className="col-xs-10">
                  <p>Made with ❤ in ReactJS for <a href="https://wildcodeschool.fr/" target="_blank" rel="noopener noreferrer">Wild Code School</a></p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;