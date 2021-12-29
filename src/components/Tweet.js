import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'
import {formatDate} from '../utils/helpers'
import {BsReply} from 'react-icons/bs'
import {FaRegHeart} from 'react-icons/fa'
import {TiHeartFullOutline} from 'react-icons/ti'

class Tweet extends Component {
  render(){
    console.log ("tweet props: ",this.props)
    const {tweet} = this.props
    if (tweet=== null){
      return(<p>Tweet Not Available</p>)
    }
    const {avatar,name, text,parent, likes, hasLiked,replies, timestamp} = tweet
    return(
      <div className="tweet">
        <img className='avatar'
        src={avatar}
        alt={`Avatar of ${name}`}/>
        <div className="tweet-info">
        <span>{name}</span>
        <span>{formatDate(timestamp)}</span>
        {parent?
        <span className="replying-to">Replying to @{parent.author}</span>:<div></div>
      }
      <p>{text}</p>
      <div className = "tweet-icons">
      <span className="tweet-icon">
        <BsReply />
        {replies?replies:''}
      </span>

      {hasLiked?  <span className="tweet-icon"><TiHeartFullOutline color = "red"/></span>:
      <span className="tweet-icon"><FaRegHeart /></span>}
      {likes?likes:''}

      </div>
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
