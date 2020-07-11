import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class Question extends Component {
  render() {
    // console.log(this.props)
    const { question } = this.props

    const { name, timestamp, optionOne, optionTwo, voteOne, voteTwo } = question

    return (
      <div>
        <p>Author: {name}</p>
        <p>Date: {formatDate(timestamp)}</p>
        <p>Option 1: {optionOne} - {voteOne} votes</p>
        <p>Option 2: {optionTwo} - {voteTwo} votes</p>
      </div>
    )
  }
}
// mapStateToProps({state},{props})
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),

  }
}

export default connect(mapStateToProps)(Question)