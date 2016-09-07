import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MovieDisplay from './movie_display';
import Search from './search';

export default (
  // Movie path should probably be movies/:movieId
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Search} />
      <Route path="movies">
        <Route path=":movieId" component={MovieDisplay} />
      </Route>
    </Route>
  </Router>
);
