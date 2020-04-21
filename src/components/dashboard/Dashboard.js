import React, {Component } from 'react';
import Subject from './Subject';

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard container">
      <div className=" materie">
        <div className="row">
          <div className="col s12 m3 l3">Citire si Limba Romana</div>
          <div className="col s10 m6 l6 offset-m1 btn light-green lighten-3"></div>
          <div className=" col s2 m2 l2 offset-l1 procent ">45%</div>
        </div>
        <div className="row games">
          <div className="col s12 m3 l3 btn lightblue lighten-5">
          Creaza cuvantul</div>
          <div className="col s12 m3 l3 offset-m1 offset-l1 btn lightblue lighten-5">
          Gaseste sunetul</div>
          <div className="col s12 m3 l3 offset-m1 offset-l1 btn lightblue lighten-5">wordMaker
          </div>
        </div>
      </div>
      <Subject/>
      <div className="materie">
        <div className="row">
        <div className="col s12 m3 l3">Matematica</div>
        <div className="col s10 m6 l6 btn light-green lighten-2"></div>
        <div className="col s2 m2 l2 offset-l1 procent">60%</div>
      </div>
      <div className="row games">
          <div className="col s12 m3 l3 btn lightblue lighten-5">
          Creaza cuvantul</div>
          <div className="col s12 m3 l3 offset-m1 offset-l1 btn lightblue lighten-5">
          Gaseste sunetul</div>
          <div className="col s12 m3 l3 offset-m1 offset-l1 btn lightblue lighten-5">wordMaker
          </div>
        </div>
      </div> 
      </div>
    )
  }
}

export default Dashboard;