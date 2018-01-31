import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { authLogoutAction } from '../../store/auth'
import { userSelector } from '../../store/user'
const mapStateToProps = userSelector
const mapDispatchToProps = { logout: authLogoutAction }
const enhance = connect(mapStateToProps, mapDispatchToProps)

import './style.css'

class Header extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func,
  }

  logout = () => this.props.logout()

  render () {
    return (
      <div className="HeaderWrapper">
        <div className="HeaderContainer">
          <div className="HeaderBlock HeaderBlockLeft">
            <NavLink to="/todos" className="HeaderItem HeaderLink" activeClassName="HeaderLinkActive">
              Задачи
            </NavLink>
          </div>
          <div className="HeaderBlock HeaderBlockRight">
            <div className="HeaderItem">
              { this.props.user.login }
            </div>
            <div className="HeaderItem HeaderLink" onClick={this.logout}>
              Выход
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default enhance(Header)