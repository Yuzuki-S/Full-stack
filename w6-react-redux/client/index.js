import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './components/App'
import wombatReducer from './reducer'

const store = createStore(wombatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})

// function render () {
//   const state = store.getState()
//   const wombats = state.wombats
//   ReactDOM.render(
//     <App wombats={wombats} />,
//     document.getElementById('app')
//   )
// }
