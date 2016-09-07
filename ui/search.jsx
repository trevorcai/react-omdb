import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import Textbox from './textbox';

// eslint-disable-next-line react/prefer-stateless-function
class Search extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { search, movies, searchText } = this.props;
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
              {`${movie.Title} (${movie.Year})`}
            </div>
          ))}
        </div>
      </div>);
  }
}

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
