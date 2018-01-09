import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConectedRouter, ConnectedRouter } from 'react-router-redux'

import configureStore, { history } from './config/configureStore' 
import App from './components/App'
// import './style.css'

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store = {store}>
    <ConnectedRouter history = {history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// class SimpleHeader extends React.Component {
//     render() {
//       return (
//         <div>
//           <h1> Приложение React </h1>
//         </div>
//       );
//     }
//   }
  
// ReactDOM.render(<SimpleHeader />,document.getElementById('root'))
