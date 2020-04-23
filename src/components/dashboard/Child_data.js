import React from 'react';

const ChildData = ({child}) => {
  
    return (
      <tr>
        <td>{child.nume}</td>
        <td>{child.clr}</td>
        <td>{child.mate} </td>
        <td>{child.exRez}</td>
        <td>{child.scor}</td>
        <td>12.04.2020</td>
      </tr> 
    )
  
}

export default ChildData;
