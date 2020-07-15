import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class Question extends Component {
  render() {
    // console.log(this.props)
    const { question } = this.props

    const { name, timestamp, avatar, optionOne, optionTwo, voteOne, voteTwo } = question

    return (
      <div className="card-container">
        <div className="card border-light">
          <div className="card-header">{name} asks:</div>
          <div className="card-body">
            <div className="card-body-left">
              <img src={avatar} />
            </div>
            <div className="card-body-right">
              <h4>Would you rather</h4>
              <p>{optionOne}...</p>
              <button>View Poll</button>
            </div>
          </div>
        </div>
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