import React from 'react'
import {connect} from 'react-redux'

import {addWombat} from '../actions'

function Wombats (props) {
  const wombats = props.wombats
  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat, i) => <li key={i}>{wombat}</li>)}
      </ul>
      <form onSubmit={ (e) => {
          e.preventDefault()
          props.dispatch(addWombat(document.getElementById('wombatName').value))
        } }>
        <input id='wombatName' type='text' name='wombat'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    wombats: state.wombats
  }
}

export default connect(mapStateToProps)(Wombats)
