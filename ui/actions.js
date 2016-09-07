export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const LOAD_SINGLE = 'LOAD_SINGLE';

export function search(searchText) {
  return {
    type: PERFORM_SEARCH,
    searchText,
  };
}

export function updateText(event) {
  return {
    type: UPDATE_TEXT,
    text: event.target.value,
  };
}

export function loadSingle(imdbId) {
  return {
    type: LOAD_SINGLE,
    imdbId,
  };
}
