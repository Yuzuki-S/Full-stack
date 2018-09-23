import React from 'react'
import {connect} from  'react-redux'
import {addPackageAction} from '../actions/packages'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick (type) {
console.log(type);
    this.props.addPackage
  }

  render() {
    return (
      <div className='app-container'><h1>Yuzuki saves lives</h1>
<div>Sports<button onClick={() => this.handleClick("sports")}>Buy</button></div>
<div>Casual<button>Buy</button></div>
<div>Work<button>Buy</button></div>
      </div>

    )
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps(dispatch){
  return {
    addPackage:(type) => {
      dispatch(addPackageAction(type))
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (App)
