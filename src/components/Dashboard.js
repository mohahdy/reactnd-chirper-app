import React,{Component} from 'react'
import {connect} from 'react-redux'
import Tweet from './Tweet'
class Dashboard extends Component{
  render(){
    console.log("Dashboard Component props",this.props)
    return(

      <div className="center">
      <h3>Time Line</h3>
      <ul>
        {this.props.tweetIds.map((id)=>(
          <li key={id}>
            <Tweet id={id}/>
          </li>
        )
        )
}
      </ul>
      </div>
    )
  }
}
function mapStateToProps({tweets}) {
  return {tweetIds: Object.keys(tweets)}
}



export default connect (mapStateToProps)(Dashboard)
