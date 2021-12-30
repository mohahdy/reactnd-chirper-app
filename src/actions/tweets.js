import { saveLikeToggle } from "../utils/api"
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export function receiveTweets (tweets){
      return {
        type:RECEIVE_TWEETS,
        tweets
    }
  }
export function toggleTweet({authedUser, hasLiked, id}){
  return {
    type: TOGGLE_TWEET,
    authedUser,
    hasLiked,
    id
  }
}

export function handleToggleTweet(info) {

  return (dispatch) =>{
    dispatch(toggleTweet(info))
    return saveLikeToggle(info).catch((e)=>{
      console.warn('error',e)
      dispatch(toggleTweet(info))
      alert ("error")
    }

    )
  }
}
