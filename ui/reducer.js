import Immutable from 'immutable';
import * as types from './types';

const defaultState = new Immutable.Map({
  searchText: '',
  movies: new Immutable.List(),
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_TEXT:
      return state.set('searchText', action.text);
    case types.SEARCH_COMPLETE:
      return state.set('movies', new Immutable.List(action.movies));
    case types.LOAD_SINGLE_COMPLETE:
      return state.set('selectedMovie', action.movie);
    case types.PERFORM_SEARCH:
      // Clear the search while a new one is running.
      return state.delete('selectedMovie').set('movies', new Immutable.List());
    default:
      return state;
  }
}
