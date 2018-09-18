import React from 'react'
import {connect} from 'react-redux'
import {fetchColours} from '../actions'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.dispatch(fetchColours())
  }

  render() {
    return (
      <div>
        <p>Hi React!</p>
        <ul>
        {this.props.colours.length > 0 && this.props.colours.map(colour => {
          return <li key={colour.id}>{colour.colour}</li>
        })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log({state})
  return {
    colours: state.colours
  }
}

export default connect(mapStateToProps)(App)
