import { connect } from 'react-redux';
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
    if (movie == null) {
      return <div>Loading...</div>;
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
