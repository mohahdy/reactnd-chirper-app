import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import LoadingBar from 'react-redux-loading-bar'
import TweetPage from './TweetPage'
import Nav from './Nav'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (

      <div>
        <LoadingBar/>
        <Nav/>
      {this.props.authedUser===null?null:
        <TweetPage match ={{params:{id:"hbsc73kzqi75rg7v1e0i6a"}}}/>
      }
      </div>

    )
  }
}
const mapStateToProps= ({authedUser}) => ({
  authedUser
});
export default connect(mapStateToProps)(App)
