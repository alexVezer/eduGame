import React from 'react';
import Card from './Card';

const Solution = (props) => {
  return (
    <div className="box" id="solution">
      {props.solution.map((litera, i) => {
        return (<Card id={i} className="empty"></Card>);
      })
      }        
     
    </div>
  );
}

export default Solution;