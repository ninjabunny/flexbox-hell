import { List, Map } from 'immutable';

const init = {
  bricks: [
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    ]
}

export default function reducer(state=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return state;
    case 'TOGGLE_TODO':
      return state;
    default:
      return state;
  }
}

