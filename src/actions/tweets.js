import { saveLikeToggle } from "../utils/api"
import {showLoading, hideLoading } from 'react-redux-loading-bar'
import {saveTweet} from '../utils/api'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

 function addTweet(tweet) {
return({ type: ADD_TWEET, tweet})
}

export function handleAddTweet(text,replyingTo)
{
  return async (dispatch,getState) => {
    const {authedUser} = getState()
    dispatch(showLoading())
    const tweet = await saveTweet({ text, author: authedUser, replyingTo })
    dispatch(addTweet(tweet,replyingTo))
    return dispatch(hideLoading())
  }
}

 function toggleTweet({ authedUser, hasLiked, id }) {
  return {
    type: TOGGLE_TWEET,
    authedUser,
    hasLiked,
    id
  }
}


export function handleToggleTweet(info) {

  return (dispatch) => {
    dispatch(toggleTweet(info))
    return saveLikeToggle(info).catch((e) => {
      console.warn('error', e)
      dispatch(toggleTweet(info))
      alert("error")
    }

    )
  }
}
