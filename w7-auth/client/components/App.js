import React from 'react'
import { connect } from 'react-redux'
import { addPackageAction } from '../actions/packages'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Logout from './Logout'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(type) {
    console.log(type);
    this.props.addPackage(type)
  }

  render() {
    return (
      <div className='app-container'><h1>FULL STACK</h1>
      <LoginForm />
      <RegisterForm />
      <Logout />
        <div>Sports<button onClick={() => this.handleClick("sports")}>Buy</button></div>
        <div>Casual<button onClick={() => this.handleClick("casual")}>Buy</button></div>
        <div>Work<button onClick={() => this.handleClick("work")}>Buy</button></div>
        {this.props.state.map(savedItem=> {
          console.log(savedItem);
          
          return <p> I saved your package: {savedItem.package} thanks for shopping with us {this.props.auth.user.username}</p>
        })}

      </div>

    )
  }
}

function mapStateToProps(state) {
    return {state:state.packages,
    auth: state.auth}
}

function mapDispatchToProps(dispatch) {
  return {
    addPackage: (type) => {
      dispatch(addPackageAction(type))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
