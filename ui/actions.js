export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const UPDATE_TEXT = 'UPDATE_TEXT';

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
