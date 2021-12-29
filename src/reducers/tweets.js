import {RECEIVE_TWEETS} from '../actions/tweets'

export default function tweets (state={}, action){
  switch(action.type){
    case RECEIVE_TWEETS:
    return{...state,
    ...action.tweets}
    case TOGGLE_TWEET:
      return{...state,
        [action.id]: {
          ...state[action.id],
          hasLiked: hasLiked? 
        }
      }
    default:
    return state

  }
}
