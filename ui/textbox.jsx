import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

// eslint-disable-next-line react/prefer-stateless-function
class Textbox extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { searchText, updateText } = this.props;
    return (
      <input
        type="text"
        placeholder="Toy Story 3"
        value={searchText}
        onChange={updateText}
      />);
  }
}

function mapStateToProps(state) {
  return {
    searchText: state.searchText,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Textbox);
