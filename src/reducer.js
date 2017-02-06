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
      return Object.assign({}, state);
    case 'SWITCH_BRICK':
      let { row, index } = action.payload;
      state.bricks[row].move(state.selected.index, index);
      return Object.assign({}, state)
    case 'TOGGLE_TODO':
      return state;
    default:
      return state;
  }
}

Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};
