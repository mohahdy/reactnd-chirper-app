import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (

      <div>
      {this.props.authedUser===null?null:
        <Dashboard/>
      }
      </div>

    )
  }
}
const mapStateToProps= ({authedUser}) => ({
  authedUser
});
export default connect(mapStateToProps)(App)
