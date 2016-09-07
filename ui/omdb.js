const SEARCH_ENDPOINT = 'http://www.omdbapi.com/?s=';

export async function fetchMovies(searchText) {
  const response = await fetch(SEARCH_ENDPOINT + searchText);
  const json = await response.json();
  return json.Search;
}

export async function fetchSingleMovie(imdbId) {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${imdbId}&plot=full&r=json`);
  return await response.json();
}
