import React from 'react'
import ReactDOM from 'react-dom'

class SimpleHeader extends React.Component {
    render() {
      return (
        <div>
          <h1> Приложение React </h1>
        </div>
      );
    }
  }
  
ReactDOM.render(<SimpleHeader />,document.getElementById('root'))
