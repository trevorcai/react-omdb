import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

const Textbox = (props) => {
  const { searchText, updateText } = props;
  return (
    <input
      type="text"
      placeholder="Toy Story 3"
      value={searchText}
      onChange={updateText}
    />);
};

Textbox.propTypes = {
  updateText: React.PropTypes.func,
  searchText: React.PropTypes.string,
};

function mapStateToProps(state) {
  return {
    searchText: state.searchText,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Textbox);
