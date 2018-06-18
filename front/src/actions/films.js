import axios from 'axios';

export const ADD_FILM_SUCCESS = "ADD_FILM_SUCCESS";
export const GET_ALL_FILMS_SUCCESS = "GET_ALL_FILMS_SUCCESS";

const API_URL = "http://localhost:3000/films"

function add_film_success(film) {
    return {
      type: ADD_FILM_SUCCESS,
      film
    }
  }
  
  function get_all_films_success(films) {
    return {
      type: GET_ALL_FILMS_SUCCESS,
      films
    }
  }
  
  export function getAllFilms() {
    return dispatch => {
      axios.get(API_URL).then(response => dispatch(get_all_films_success(response.data)))
    };
  }
  
  export function addFilm(film) {
    return dispatch => {
      axios.post(API_URL,{name:film}).then(response => 
        dispatch(add_film_success(response.data)))
    };
  }