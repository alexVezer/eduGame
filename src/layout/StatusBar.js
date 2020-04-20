import React from 'react';

function StatusBar (props){
  return (
    
      <div className="StatusBar">
      { console.log(props)}
        <span>User Name: {props.user.name}</span>
        <span>score: {props.score}</span>
        <span>level: {props.lastRoundCompleted}</span>
      </div>
    );
  
}

export default StatusBar;