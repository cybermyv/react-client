import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import axios from 'axios'

import { Button } from 'react-bootstrap'
import { userAuth } from '../../api'


import { authLoginAction, authSelector } from '../../store/auth'
import { userSetAction } from '../../store/user'

const mapStateToProps = authSelector

const mapDispatchToProps = {
  setAuth: authLoginAction,
  setUser: userSetAction,
  gotoMain: () => push('/main'),
}

const enhance = connect(mapStateToProps, mapDispatchToProps)

class AuthForm extends React.Component {
  static propTypes = {
    setAuth: PropTypes.func,
    setUser: PropTypes.func,
    gotoMain: PropTypes.func,
    auth: PropTypes.object,
  }

  state = {
    username: '',
    password: '',
  }

  setUsername = event => this.setState({ username: event.target.value })
  setPassword = event => this.setState({ password: event.target.value })

  auth = () => {
    const { username, password } = this.state

    axios
      .post('/api/signin', { username, password })
      .then(({ data }) => {

        const { ID, token, login } = data;



               this.props.setAuth(ID, token);
               this.props.setUser (ID, login);

               console.log(login);
               this.props.gotoMain();
      return data;
      })
      .catch(error => {
        console.log(error)
      })
  }

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
        <button
          className="btn btn-lg btn-primary btn-block"
          type="button"
          onClick={this.auth}
        >
          {' '}
          Войти
        </button>
      </form>
    )
  }
}

export default enhance(AuthForm)
