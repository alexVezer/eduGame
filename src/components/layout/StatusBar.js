import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function StatusBar (props){
  return (
    
      <div className="StatusBar">
        <nav className="nav-wrapper deep-purple lighten-4">
          <div className="container">
            <Link to='/' className="brand-logo">EduGame</Link>
            <SignedInLinks/>
            <SignedOutLinks/>
          </div>
        </nav>
      </div>
    );
  
}

export default StatusBar;