import * as types from './actions';

const defaultState = {
  searchText: '',
  movies: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_TEXT:
      return { ...state, searchText: action.text };
    case 'SEARCH_COMPLETE':
      return { ...state, movies: action.movies };
    default:
      return state;
  }
}
