import React from 'react';

export function Parent(props) { 
console.log('props', props) 
  const { bricks, selectBrick, selected, switchBrick } = props;
  const brickWidthMultiplier = 40;
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

  return (<div id='parent'>
    {layBricks}
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

