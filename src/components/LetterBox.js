import React from 'react';

const LetterBox = (props) => {
  return (
    <span class="fill letter" draggable="true">{props.letter}</span>
  );
}

export default LetterBox;