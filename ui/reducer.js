import * as types from './actions';

const defaultState = {
  searchText: '',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_TEXT:
      return { ...state, searchText: action.text };
    case types.PERFORM_SEARCH:
      console.log(state.searchText);
      return state;
    default:
      return state;
  }
}
