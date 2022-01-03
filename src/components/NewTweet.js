import React, {Component} from 'react'
import {handleAddTweet} from '../actions/tweets'
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'
class NewTweet extends Component {
  state = {
    text:'',
    home: false,
  }
  handleChange = (e) => {
    const text = e.target.value;
    this.setState(()=>({text}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted text: ', this.state.text)
    this.setState(()=>({text:'', home: true}))
    this.props.dispatch(handleAddTweet(this.state.text, this.props.id))
  }

  render() {
    const {text, home} = this.state
    return(
      home ?
      <Navigate to = '/'/>:
      <div className="center">
      <h3>New Tweet</h3>
        <form className = "new-tweet">
        <textarea 
        placeholder = "What is happening?"
        value = {text}
        onChange = {this.handleChange}
        className = "textarea"
        maxLength={280}/>
        </form>
        <button type="submit" className="btn" type="submit" onClick={this.handleSubmit} disabled={this.state.text===''}>
          Submit
        </button>
      </div>
    )}
}

export default  connect()(NewTweet)
