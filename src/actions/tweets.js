import { saveLikeToggle } from "../utils/api"
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export function receiveTweets (tweets){
      return {
        type:RECEIVE_TWEETS,
        tweets
    }
  }
export function toggleTweet({authedUser, hasliked, id}){
  return {
    type: TOGGLE_TWEET,
    authedUser,
    hasliked,
    id
  }
}

export function handleToggleTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info))
    return saveLikeToggle(info).catch((e)=>{
      console.warn('error')
      dispatch(toggleTweet(info))
    }

    )
  }
}