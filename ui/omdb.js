const SEARCH_ENDPOINT = 'http://www.omdbapi.com/?s=';

export async function fetchMovies(searchText) {
  const response = await fetch(SEARCH_ENDPOINT + searchText);
  const json = await response.json();
  return json.Search;
}
