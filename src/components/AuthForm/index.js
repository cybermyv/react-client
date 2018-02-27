import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { asyncActionAuthLogin } from '../../store/auth';


import { Button } from 'react-bootstrap'

import './style.css'

const enhance = connect(

  () => ({}),
  { login: asyncActionAuthLogin }
);

class AuthForm extends React.Component {
  static propTypes = {
    login: PropTypes.func,
    gotoMain: PropTypes.func
  }

  state = {
    username: 'admin',
    password: 'admin',
  }

  setUsername = event => this.setState({ username: event.target.value })
  setPassword = event => this.setState({ password: event.target.value })


  auth = async () => {
    console.log('async');

    const { username, password } = this.state;

    this.props.login(username, password);
  }

  render() {

    return (
      <div className="signin-container">
      
        <form className="form-signin">
        <h2 className="form-signin-heading">логинка</h2>    
          {/* <label htmlFor="inputEmail" className="sr-only">
          Адрес электронной почты
        </label> */}
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
          {/* <label htmlFor="inputPassword" className="sr-only">
          Password
        </label> */}
          <input
            type="password"
            id="inputPassword"
            name="password"
            className="form-control"
            placeholder="Пароль"
            value={this.state.password}
            onChange={this.setPassword}
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            type="button"
            onClick={this.auth}
          >
            {' '}
            Войти
        </button>
        </form>
        </div>
      
    )
  }
}

export default enhance(AuthForm)
