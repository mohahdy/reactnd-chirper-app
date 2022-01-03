import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import LoadingBar from 'react-redux-loading-bar'
import TweetPage from './TweetPage'
import Nav from './Nav'
import {Route,Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
      <div className="container">
        <Nav/>

      {this.props.authedUser===null?null:
        <Routes>

        <Route path = '/'  element={<Dashboard/>}/>
        <Route path = "/tweet/:id" element={<TweetPage/>}/>
        <Route path = '/new' element={<NewTweet/>}/>
        </Routes>
      }
      </div>
      </Router>

    )
  }
}
const mapStateToProps= ({authedUser}) => ({
  authedUser
});
export default connect(mapStateToProps)(App)
