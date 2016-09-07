import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

const nonTitleFields = ['Rated', 'Plot', 'Released', 'Runtime', 'Genre',
  'Director', 'Writer', 'Language', 'Awards'];

// eslint-disable-next-line react/prefer-stateless-function
class MovieDisplay extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.loadSingle(this.props.params.movieId);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { movie } = this.props;
    const exitButton = <div><Link to="/">X</Link></div>;

    if (movie == null) {
      return (
        <div>
          <div>Loading...</div>
          {exitButton}
        </div>
      );
    }

    return (
      // TODO: Error handling for nonexistent imdbIds
      <div>
        <img src={movie.Poster} alt="Movie Poster" />
        <div className="movie-title">Title: {movie.Title}</div>
        {nonTitleFields.map(field => (
          <div key={field}>{field}: {movie[field]}</div>
        ))}
        <div>IMDb Rating: {movie.imdbRating}</div>
        {exitButton}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(MovieDisplay);
