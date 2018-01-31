import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { authSelector } from '../../store/auth'

const mapStateToProps = (state) =>{
    auth : state.auth
  }

  const enhance = connect(mapStateToProps);


export default class Main extends React.Component{
    static propTypes = {
        auth: PropTypes.object,
        setAuth: PropTypes.func,
      }

      constructor(props) {
        super(props)
    
      }
      
      render(){
          
          return(
              <div>
              <h1>
              Основное окно
              
               </h1>
              </div>
          )
      }
}