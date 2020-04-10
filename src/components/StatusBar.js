import React, { Component } from 'react';

class StatusBar extends Component {
  state = {  }
  render() {
    return (
      <div className="StatusBar">
        <span>User Name: Cris</span>
        <span>score: 120</span>
        <span>level: 1</span>
      </div>
    );
  }
}

export default StatusBar;