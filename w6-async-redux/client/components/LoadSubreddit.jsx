import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

const LoadSubreddit = ({dispatch}) => (
  // let dispatch = props.dispatch
  // let {dispatch} = props
  <button onClick={() => dispatch(fetchPosts('newzealand'))}>
    Fetch Posts
  </button>
)

export default connect()(LoadSubreddit)
