import React, { Component } from 'react'
import { Router, Switch, Redirect, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { noop } from 'lodash'
import AuthForm from '../../components/AuthForm'
import Main from '../../components/Main'
import { userAuth } from '../../api'

import './style.css'

const history = createBrowserHistory()

export default class App extends Component {
  state = { auth: {} }

  setAuth = ({ ID, login, token } = {}, cb = noop) =>
    this.setState(
      {
        auth: { ID, token },
        dosplayName: login,
      },
      cb,
    )

  auth = async (username, password) => {
    try {
      console.log('авторизация');

        const authInfo = await userAuth(username, password);

      console.log('authInfo',authInfo);

        this.setAuth(authInfo, () => history.push('/main'))
    } catch (e) {
      console.log('error_auth', e)
    }
  }

  render() {
    return (
      <div className="AppContainer">
        <Router history={history}>
          <Switch>
            <Route path="/signin">
              <AuthForm auth={this.auth} />
            </Route>
            <Route path="/main">
              <Main 
                auth={this.state.auth}
                setAuth={this.setAuth}
              />
            </Route>

            <Redirect to="/signin" />
          </Switch>
        </Router>
      </div>
    )
  }
}

// <Route path = "/main">
//     auth={this.state.auth}
//     setAuth={this.setAuth}
// </Route>
