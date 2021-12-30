import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'
import {formatDate} from '../utils/helpers'
import {BsReply} from 'react-icons/bs'
import {FaRegHeart} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import {handleToggleTweet} from '../actions/tweets'


class Tweet extends Component {

 toggleLike= (e)=>{
    e.preventDefault()
    const {authedUser, tweet, dispatch} = this.props;
    dispatch (handleToggleTweet({authedUser, id:tweet.id, hasLiked:tweet.hasLiked}))
  }
  render(){
    const {tweet} = this.props

    console.log ("tweet props: ",this.props)
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
      <span>
      <p>{text}</p>
      </span>
      <div>
      <div className="tweet-icons">
      <span className="tweet-icon">
        <BsReply />
        {replies?replies:''}
        </span>

<span className="tweet-icon">
      {hasLiked? <FaHeart color = "red" onClick={this.toggleLike}/>:
      <FaRegHeart onClick={this.toggleLike}/>}
      {likes?likes:''}
      </span>
      </div>

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
