import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import Textbox from './textbox';

const Search = (props) => {
  const { search, movies, searchText } = props;
  return (
    <div>
      <div>
        Search titles: < Textbox />
      </div>
      <div className="button" onClick={() => search(searchText)}>
        FIND MY MOVIES!
      </div>
      <div>
        {movies.map((movie, index) => (
          <div key={index} className="moviebox">
            <Link to={`/movies/${movie.imdbID}`}>
              {`${movie.Title} (${movie.Year})`}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

Search.propTypes = {
  search: React.PropTypes.func,
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
