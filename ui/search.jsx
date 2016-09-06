import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import Textbox from './textbox';

// eslint-disable-next-line react/prefer-stateless-function
class Search extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { search } = this.props;
    return (
      <div>
        <div>
          Search titles: < Textbox />
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
