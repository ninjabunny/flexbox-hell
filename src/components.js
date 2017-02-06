import React from 'react';

export function Parent(props) { 
console.log('props', props) 
  const { bricks, selectBrick, selected, switchBrick } = props;
  const brickWidthMultiplier = 50;
  const brickColors = ['red', 'blue', 'green', 'yellow'];

  let layBricks = bricks.map((row, rowIndex) => {
    let individualRow = row.map((brick, brickIndex)=> {
      function handleClick(e) {
        e.stopPropagation();
        if(selected === undefined) {
          selectBrick({row: rowIndex, index: brickIndex});
        } else {
          if (selected.row === rowIndex) {
            switchBrick({row: rowIndex, index: brickIndex});
            selectBrick(undefined);  
          } else {
            selectBrick({row: rowIndex, index: brickIndex});
          }
        } 
      }

      let classNames = 'brick '
      if (selected) {
        if (selected.row === rowIndex && selected.index === brickIndex) {
          classNames += 'selected';
        }
      }
      
      const divStyle = {
        width: (brickWidthMultiplier * brick) + 'px',
        background: brickColors[rowIndex]
      };

      return <div 
        className={classNames}
        style={divStyle}
        onClick={handleClick}>
          {brick}
        </div>;
    });
    return (<div className='row' id={'row' + rowIndex}>{individualRow}</div>);
  });

  let addClass = "";

  function rule1() {
    for (let i = 0; i < bricks.length - 1; i++) {
      let arr1 = 0;
      let arr2 = 0;
      for (let j = 0; j < bricks[0].length - 1; j++) {
        arr1 += bricks[i][j];
        arr2 += bricks[i + 1][j];
        if (arr1 === arr2) {
          return '';
        }
      }          
    }
    return ' weener ';
  }

  addClass += rule1();
console.log(addClass);
  return (<div id='parent'>
    {layBricks}<br />
    <span>Instructions: To move a brick, click one and then another of the same color.</span><br />
    <span className={addClass}>Rules: Arrange the bricks such that no crack in one row lines up with a crack in any other row. (2,184 solutions)</span><br />
    <span>Challenge 1: find a solution that has 180° symmetry, one where the solution looks the same after you turn it upside down. (56 solutions)</span><br />
    <span>Challenge 2: find a solution where no two pieces of the same size (4 units or less) overlap each other vertically. (5 solutions)</span><br />
    <span>Challenge 3: find a solution that satisfies Challenges 1 and 2. 1 solution.</span>
    </div>
  );
  // const { todos, toggleTodo, addTodo } = props;

  // const onSubmit = (event) => {
  //   const input = event.target;
  //   const text = input.value;
  //   const isEnterKey = (event.which == 13);
  //   const isLongEnough = text.length > 0;

  //   if(isEnterKey && isLongEnough) {
  //     input.value = '';
  //     addTodo(text);
  //   }
  // };

  // const toggleClick = id => event => toggleTodo(id);

  // return (
  //   <div className='todo'>
  //   hi whats up. do it now
  //     <input type='text'
  //            className='todo__entry'
  //            placeholder='Add todo'
  //            onKeyDown={onSubmit} />
  //     <ul className='todo__list'>
  //       {todos.map(t => (
  //         <li key={t.get('id')}
  //             className='todo__item'
  //             onClick={toggleClick(t.get('id'))}>
  //           <Todo todo={t.toJS()} />
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

