import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Button } from 'react-bootstrap';
import {userAuth} from '../../api';


//import 'reaact-bootstrap/dist/css/bootstrap.min.css';



class AuthForm extends React.Component {

    state = {
    username: '',
    password: '',
  }
  setUsername = event => this.setState({ username: event.target.value })
  setPassword = event => this.setState({ password: event.target.value })

  auth = () => {
    return this.props.auth(this.state.username, this.state.password)
  }


//   handleChange = event => {
//     const state = this.state
//     state[event.target.name] = event.target.value
//     this.setState(state);
//   }

//   signIn = ()=>{
//     userAuth(this.state.email, this.state.password);
//   }
  
  render() {
   // const { username, password } = this.state
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading">Логинка</h2>
        <label htmlFor="inputEmail" className="sr-only">
          Адрес электронной почты
        </label>
        <input
          id="inputEmail"
          name="username"
          className="form-control"
          type="text"
          placeholder="Имя пользователя"
          required
          autoFocus
          
          value={this.state.username}
          onChange={this.setUsername}
        />
        <label htmlFor="inputPassword" className="sr-only">
          
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          
          name="password"
          className="form-control"
          placeholder="Пароль"
          
          value={this.state.password}
          onChange={this.setPassword}
        />
        <button className="btn btn-lg btn-primary btn-block" type="button" 
        onClick={this.auth}>
          {' '}
          Войти
        </button>
      </form>
    )
  }
}
AuthForm.propTypes = {
    auth: PropTypes.func,
  };


export default AuthForm