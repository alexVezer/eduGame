import React, { Component } from 'react';
import Notifications from './Notifications';
import ChildrenTable from './ChildrenTable';
import {connect} from 'react-redux';
import {addChild} from '../../actions/childActions';


export class DashboardAdult extends Component {
  state = {
    numeElev:'',
    clasa: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addChild(this.state);
  }
  render() {
    //console.log(this.props.children)
    const {children} = this.props;
    
    return (
      <div className="container">
        <div className="row">
        <div className="col s12 m9 l9 child-table">
          <ChildrenTable children = {children}/>
        </div>
        <div className=" col s12 m2 l2 offset-m1 offset-l1 lightblue">
          <Notifications/>
        </div>
      </div>
      <form onSubmit={this.handleSubmit} className="camp">

      <div className="input-field">
        <div className="camp row">
          <div className="col s12 m4 l4">
              <label htmlFor="numeElev ">Nume elev</label>
              <input type="text" id="numeElev" onChange={this.handleChange}/>
          </div>
          <div className="col s12 m4 l4">
              <label htmlFor="clasa">Clasa</label>
              <input type="text" id="clasa" onChange={this.handleChange}/>
          </div>
          
          <div className="col s12 m3 offset-m1 l3 offset-l1">                  
              <button className="btn deep-purple lighten-3">Adauga elev</button>
          </div>  
        </div>
      </div>
      </form>
    </div>  
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    children: state.child.children
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addChild: (child) => dispatch(addChild(child))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DashboardAdult);