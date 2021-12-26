const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export function receiveTweets (tweets){
  switch (action.type){
    case RECEIVE_TWEETS:
    return {
        type:RECEIVE_TWEETS,
        tweets
    }
    default:
    return state;
  }

}
