import React from 'react';

function Card(props) {
  
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('continut', target.innerText);
    target.classList.add('hold');
    setTimeout(() => {
      target.classList.add('invisible')
    }, 0);
  }

  function dragLeave(e) {
    e.target.classList.add('empty');
  }
  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <div id = {props.id} className="card fill letter" onDragStart= {dragStart} onDragLeave={dragLeave} onDragOver = {dragOver} draggable='true'>
      {props.children}
    </div>
  );
  
}

export default Card;