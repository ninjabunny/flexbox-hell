const uid = () => Math.random().toString(34).slice(2);

export function selectBrick(brick) {
  return {
    type: 'SELECT_BRICK',
    payload: brick
  };
}

