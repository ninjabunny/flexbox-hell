import { connect } from 'react-redux';
import * as components from './components';
import { selectBrick } from './actions';

export const Parent = connect(
  function mapStateToProps(state) {
    return {
    	bricks: state.bricks,
    	selected: state.selected
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      selectBrick: brick => dispatch(selectBrick(brick))
    };
  }
)(components.Parent);

