import React from 'react';
import {NavLink} from 'react-router-dom';
const SignedInLinks = (props) => {
  return (
    <ul className="right">
          <li><NavLink to='/'>Top</NavLink> </li>
          <li><NavLink to='/'>Sign Out</NavLink> </li>
          <li> <label htmlFor="nume">Nume</label></li>
          <li> <label htmlFor="scor">Scor</label></li>
          <li> <NavLink to='/profile' className='btn btn-floating green lighten-1'>AV</NavLink> </li>
          <li> <label htmlFor="nume">LevelBadge</label></li>
        </ul>
      
    );
  
}

export default SignedInLinks;