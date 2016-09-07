import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import Textbox from './textbox';

const renderMovie = (movie, index) => (
  <div key={index} className="moviebox">
    <Link to={`/movies/${movie.imdbID}`}>
      {`${movie.Title} (${movie.Year})`}
    </Link>
  </div>
);

const Search = (props) => {
  const { performSearch, movies, searchText } = props;
  const renderMovies = () => movies.map(renderMovie);

  return (
    <div>
      <div>
        Search titles: <Textbox />
      </div>
      <div className="button" onClick={() => performSearch(searchText)}>
        FIND MY MOVIES!
      </div>
      <div>
        {renderMovies()}
      </div>
    </div>
  );
};

Search.propTypes = {
  performSearch: React.PropTypes.func,
  movies: React.PropTypes.array,
  searchText: React.PropTypes.string,
};

function mapStateToProps(state) {
  return {
    searchText: state.searchText,
    movies: state.movies,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Search);
