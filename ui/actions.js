export const PERFORM_SEARCH = 'PERFORM_SEARCH';

export function search(searchText) {
  console.log('Send search');
  return {
    type: PERFORM_SEARCH,
    searchText,
  };
}
