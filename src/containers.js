import { connect } from 'react-redux';
import * as components from './components';
// import { addTodo, toggleTodo } from './actions';

export const Parent = connect(
  function mapStateToProps(state) {
  	console.log(state)
    return { bricks: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      // addTodo: text => dispatch(addTodo(text)),
      // toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(components.Parent);

