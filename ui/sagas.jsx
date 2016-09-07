import { put, take, fork } from 'redux-saga/effects';
import * as types from './actions';
import { fetchMovies } from './omdb';

function* sendSearch(searchText) {
  try {
    const movies = yield fetchMovies(searchText);
    yield put({ type: 'SEARCH_COMPLETE', movies });
  } catch (error) {
    yield put({ type: 'OMDB_API_FAILIURE', error });
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchForSearch() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const action = yield take(types.PERFORM_SEARCH);
    yield fork(sendSearch, action.searchText);
  }
}
