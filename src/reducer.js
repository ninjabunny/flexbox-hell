const init = {
  bricks: [
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    ],
  selected: undefined
}

export default function reducer(state=init, action) {
  console.log('DISPATCH: ', action)
  switch(action.type) {
    case 'SELECT_BRICK':
      state.selected = action.payload;
      return Object.assign({}, state)
    case 'ADD_TODO':
      return state;
    case 'TOGGLE_TODO':
      return state;
    default:
      return state;
  }
}

