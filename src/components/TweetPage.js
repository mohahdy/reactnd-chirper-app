import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet';
import NewTweet from './NewTweet'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
function TweetPage(props) {
    const { id } = useParams();
    const replies = useSelector((state) => state.tweets[id].replies);

        return (

            <div className="center">
                <h3> TWEET</h3>
                <Tweet id={id} />
                <NewTweet id={id} />
                
               
               {replies.map(reply => (<Tweet key={reply} id={reply} />))}
                    
            
            </div>)
        
    

}

export default connect()(TweetPage);