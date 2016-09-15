import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

const nonTitleFields = ['Rated', 'Plot', 'Released', 'Runtime', 'Genre',
  'Director', 'Writer', 'Language', 'Awards'];

const renderNonTitleFields = (movie) => (
  nonTitleFields.map(field => (
    <div key={field} className="movieField">{field}: {movie[field]}</div>
  ))
);

class MovieDisplay extends React.Component {
  componentDidMount() {
    this.props.loadSingle(this.props.params.movieId);
  }

  render() {
    const { movie } = this.props;
    const exitButton = <div className="closeButton"><Link to="/">X</Link></div>;

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
        <div className="movie-title"><h2>Title: {movie.Title}</h2></div>
        {renderNonTitleFields(movie)}
        <div className="movieField">IMDb Rating: {movie.imdbRating}</div>
        {exitButton}
      </div>
    );
  }
}

MovieDisplay.propTypes = {
  loadSingle: React.PropTypes.func,
  params: React.PropTypes.object,
  movie: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    movie: state.get('selectedMovie', null),
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(MovieDisplay);
