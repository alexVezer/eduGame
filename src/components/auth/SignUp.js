import React, { Component } from 'react'

export class SignUp extends Component {
  state = {
    email:'',
    password:'',
    firstName:'',
    lastName:'',
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
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <label htmlfor="firstName">Prenume</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Nume</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="clasa">Clasa</label>
            <input type="text" id="clasa" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlfor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlfor="password">Parola</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-2">Sign Up</button> 
          </div>
        </form>
        
      </div>
    )
  }
}

export default SignUp;
