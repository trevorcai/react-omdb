import * as types from './types';

const defaultState = {
  searchText: '',
  movies: [],
  selectedMovie: null,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_TEXT:
      return { ...state, searchText: action.text };
    case types.SEARCH_COMPLETE:
      return { ...state, movies: action.movies };
    case types.LOAD_SINGLE_COMPLETE:
      return { ...state, selectedMovie: action.movie };
    case types.PERFORM_SEARCH:
      // Clear the search while a new one is running.
      return {...state, movies: [], selectedMovie: null};
    default:
      return state;
  }
}
