import React, { Component } from 'react'
import ChildData from './Child_data';

const ChildrenTable = ({children}) => {
  
    return (
      <div>
        <table>
          <thead>
            <tr>
                <th>Nume</th>
                <th>CLR</th>
                <th>Matematica</th>
                <th>Ex. rezolvate</th>
                <th>Scor</th>
                <th>Ultima logare</th>
            </tr>
          </thead>

        <tbody>
          {children && children.map(child => {
            console.log(child)
            return (
              <ChildData child={child} key={child.id}/>
            )
          } )}
          
        </tbody>
      </table>
      </div>
    )
}


export default ChildrenTable
