import React from 'react';

function Board(props) {
  
  const drop = e => {
    e.preventDefault();
    const continut = e.dataTransfer.getData('continut');
    
    e.target.append(continut);

  }

  function dragEnter(e) {
    e.preventDefault();
    this.className += ' hover';
  }

  const dragOver = e => {
    e.preventDefault();
  }

  return (
    <div id={props.id}  onDrop={drop} dragenter= { () => dragEnter() } onDragOver={dragOver} >
      {props.children}
    </div>
  );
}

export default Board;