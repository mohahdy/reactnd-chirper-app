import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'
import {BsReply} from 'react-icons/bs'
import {FaRegHeart} from 'react-icons/fa'
class Tweet extends Component {
  render(){
    console.log ("tweet props: ",this.props)
    const {tweet} = this.props
    if (tweet=== null){
      return(<p>Tweet Not Available</p>)
    }
    const {avatar,name, text,parent} = tweet
    return(
      <div className="tweet">
        <img className='avatar'
        src={avatar}/>
        <div className="tweet-info">

        {name}
        </div>
        <div className="tweet-info">
        {text}
        </div>
        {parent?
        <div className="tweet-info">Replying to @{parent.author}</div>:<div></div>
      }
        <hr/>
        <div className = "tweet-icons">
        <span className="tweet-icon"><BsReply /></span>
        <span className="tweet-icon"><FaRegHeart /></span>
        </div>
      </div>
    )
  }
}

function mapStateToProps({tweets,users, authedUser}, {id}){
  const tweet = tweets[id]
  const parentTweet = tweet?tweets[tweet.replyingTo]:null
  return{
    authedUser,
    tweet: tweet?formatTweet(tweet,users[tweet.author],authedUser,parentTweet):null
  }
}
export default connect(mapStateToProps)(Tweet)
