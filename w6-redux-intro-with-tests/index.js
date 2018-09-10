import {createStore} from 'redux'

import wombatReducer from './reducers/wombatReducer'
import {addWombat} from './actions'

const store = createStore(wombatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

function render () {
  const state = store.getState()
  const wombats = state.wombats
  document.getElementById('app').innerHTML = renderWombats(wombats)

  wombats.forEach(wombat => {
    document.getElementById(`delete${wombat}`)
    .addEventListener('click', deleteWombat.bind(null, wombat))
  })

  document.getElementById("form")
  .addEventListener('submit', addNewWombat)
}

// store.dispatch({
//   type: 'ADD_WOMBAT',
//   wombat: 'Harrison'
// })

function deleteWombat(wombat) {
  store.dispatch({
    type: 'DEL_WOMBAT',
    wombat: wombat
  })
}

function addNewWombat(event) {
  event.preventDefault()
  let wombatName = document.getElementById('wombatName').value
  store.dispatch(addWombat(wombatName))
}

function renderWombats (wombats) {
  let output = '<ul>'
  for (const wombat of wombats) {
    output += `<li>${wombat}<button id="delete${wombat}">Delete</button></li>`
  }
  output += '</ul>'

  output += '<form id="form"><input id="wombatName" type="text" name="wombatName"/><input type="submit"/></form>'
  return output
}
