import React from 'react'

const Subject = () => {
  return (
    <div className=" materie">
      <div className="row">
        <div className="col s12 m3 l3">Citire si Limba Romana</div>
        <div className="col s10 m6 l6 offset-m1 btn light-green lighten-4"></div>
        <div className=" col s2 m2 l2 offset-l1 procent ">45%</div>
      </div>
    <div className="row games">
      <div className="col s12 m3 l3 btn lightblue">
      Creaza cuvantul</div>
      <div className="col s12 m3 l3 offset-m1 offset-l1 btn lightblue">
      Gaseste sunetul</div>
      <div className="col s12 m3 l3 offset-m1 offset-l1 btn lightblue">wordMaker
      </div>
    </div>
  </div>
  )
}

export default Subject;
