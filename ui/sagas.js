import { put, take, fork } from 'redux-saga/effects';
import * as types from './types';
import { fetchMovies, fetchSingleMovie } from './omdb';

function* sendSearch(searchText) {
  try {
    const movies = yield fetchMovies(searchText);
    yield put({ type: types.SEARCH_COMPLETE, movies });
  } catch (error) {
    yield put({ type: types.OMDB_API_FAILIURE, error });
  }
}

export function* watchForSearch() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const action = yield take(types.PERFORM_SEARCH);
    yield fork(sendSearch, action.searchText);
  }
}

function* loadSingle(imdbId) {
  try {
    const movie = yield fetchSingleMovie(imdbId);
    yield put({ type: types.LOAD_SINGLE_COMPLETE, movie });
  } catch (error) {
    yield put({ type: types.OMDB_API_FAILIURE, error });
  }
}

export function* watchForLoadSingle() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const action = yield take(types.LOAD_SINGLE);
    yield fork(loadSingle, action.imdbId);
  }
}
