import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading-bar'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (

      <div>
        <LoadingBar/>
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
