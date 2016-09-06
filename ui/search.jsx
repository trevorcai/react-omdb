import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

// eslint-disable-next-line react/prefer-stateless-function
class Search extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { search } = this.props;
    return (
      <div>
        <div>
          Search titles: <input type="text" placeholder="Toy Story 3" />
        </div>
        <div className="button" onClick={() => search('tmp')}>
          FIND MY MOVIES!
        </div>
      </div>);
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

const empty = {};
export default connect(() => empty, mapActionCreatorsToProps)(Search);
