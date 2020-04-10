import React from 'react';

const Solution = (props) => {
  return (
    <div class="box" id="solution">
      {props.solution.map(litera => {
        return (<div class="empty"></div>);
      })
      }        
     
    </div>
  );
}

export default Solution;