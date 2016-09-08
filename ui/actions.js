import * as types from './types';

export function performSearch(searchText) {
  return {
    type: types.PERFORM_SEARCH,
    searchText,
  };
}

export function updateText(event) {
  return {
    type: types.UPDATE_TEXT,
    text: event.target.value,
  };
}

export function loadSingle(imdbId) {
  return {
    type: types.LOAD_SINGLE,
    imdbId,
  };
}
