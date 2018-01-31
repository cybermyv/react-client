import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { noop } from 'lodash'

import AuthForm from '../../components/AuthForm'
import Main from '../../components/Main'
import Header from '../../components/Header';
import { userAuth } from '../../api'

import './style.css'


  export default class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        
          <Switch>
            <Route path="/signin">
              <AuthForm />
            </Route>

            <Route path="/main">
             <Header />  
            
            </Route>

            <Redirect to="/signin" />
          </Switch>
        
      </div>
    )
  }
}

