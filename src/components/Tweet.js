import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'
import {formatDate} from '../utils/helpers'
import {BsReply} from 'react-icons/bs'
import {FaRegHeart} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import {handleToggleTweet} from '../actions/tweets'
import {Link,Navigate} from 'react-router-dom'

 

class Tweet extends Component {

  state ={parent:false,
  parentID:null}

  toParent = (e,id)=>{
    e.preventDefault();
  this.setState({parent:true,
  parentID:id})
  }


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
    const {avatar,name, text,parent, likes, hasLiked,replies,id,timestamp} = tweet
    return(
      this.state.parent? <Navigate to ={`/tweet/${this.state.parentID}`}/>:
      <Link className="tweet" to={`/tweet/${tweet.id}`}>
        <img className='avatar'
        src={avatar}
        alt={`Avatar of ${name}`}/>
        <div className="tweet-info">
        <span>{name}</span>
        <span>{formatDate(timestamp)}</span>
        {parent?
        <span className="replying-to" onClick = {(e)=>this.toParent(e,parent.id)}>Replying to @{parent.author}</span>:<div></div>
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

      </Link>


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
