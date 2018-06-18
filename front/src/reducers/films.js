import { ADD_FILM_SUCCESS, GET_ALL_FILMS_SUCCESS } from '../actions/films';

export function films(state = { films: [] }, action) {
  switch (action.type) {
    case ADD_FILM_SUCCESS:
      return { ...state, films: state.films.concat(action.film) }

    case GET_ALL_FILMS_SUCCESS:
    return { ...state, films: action.films }

    default:
      return state
  }
}