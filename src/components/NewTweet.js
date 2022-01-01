import React, {Component} from 'react'
import {handleAddTweet} from '../actions/tweets'
import {connect} from 'react-redux'
class NewTweet extends Component {
  state = {
    text:''
  }
  handleChange = (e) => {
    const text = e.target.value;
    this.setState(()=>({text}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted text: ', this.state.text)
    this.setState(()=>({text:''}))
    this.props.dispatch(handleAddTweet(this.state.text, this.props.id))
  }

  render() {
    const {text} = this.state
    return(
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
