import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllDbf } from '../../api';


import {authSelector, authLogoutAction } from '../../store/auth'
import { userSelector } from '../../store/user'


const mapStateToProps = userSelector;
const mapDispatchToProps = { logout: authLogoutAction }
const enhance = connect(mapStateToProps, mapDispatchToProps)


 class Main extends React.Component{
    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func,
      }
    
      //logout = () => this.props.logout()

componentDidMount(){
const dbf = getAllDbf();
    

}
      
      render(){
          
          return(
              <div>
              <h1>
              Основное окно
              {this.props.user.login }
               </h1>
              </div>
          )
      }
}

export default enhance(Main);