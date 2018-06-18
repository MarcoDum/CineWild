import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import '../App.css';
import logo from '../img/logo.png';
import Home from '../containers/Home';
import Movies from '../containers/Movies';
import Contact from '../containers/Contact';
import MovieDetail from './MovieDetail';

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
            <Route path="/contact" component={Contact} />
            <Route path="/film/:id" component={MovieDetail} />
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