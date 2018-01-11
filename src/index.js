import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from 'react-bootstrap';
import {userAuth} from './api';


//import 'reaact-bootstrap/dist/css/bootstrap.min.css';


class Signin extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = event => {
    const state = this.state
    state[event.target.name] = event.target.value
    this.setState(state);
  }

  signIn = ()=>{
    userAuth(this.state.email, this.state.password);
  }
  
  render() {
    const { email, password } = this.state
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading">Логинка</h2>
        <label htmlFor="inputEmail" className="sr-only">
          Адрес электронной почты
        </label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
          
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="inputPassword" className="sr-only">
          {' '}
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          
          name="password"
          className="form-control"
          placeholder="Password"
          
          value={password}
          required
          onChange={this.handleChange}
        />
        <button className="btn btn-lg btn-primary btn-block" type="button" 
        onClick={this.signIn}>
          {' '}
          Sign in
        </button>
      </form>
    )
  }
}

ReactDOM.render( <Signin /> ,
  document.getElementById('root')
);