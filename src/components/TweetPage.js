import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet';
import NewTweet from './NewTweet'
class TweetPage extends Component {
    render() {
        return (

            <div className="center">
                <h3> TWEET</h3>
                <Tweet id={this.props.id} />
                <NewTweet id={this.props.id} />
                
               
               {this.props.replies.map(reply => (<Tweet id={reply} />))}
                    
            
            </div>)
        
    
}
}

function mapStateToProps({ tweets, users, authedUser }, props) {
    const { id } = props.match.params;

    return {
        id,
        replies: tweets[id].replies,
        authedUser
    }




}
export default connect(mapStateToProps)(TweetPage);