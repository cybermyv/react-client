import PropTypes from 'prop-types'
import React from 'react'


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
              {this.props.auth.token}
              </h1>
              </div>
          )
      }
}