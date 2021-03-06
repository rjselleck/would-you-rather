import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatPercentage } from '../utils/helpers'


class QuestionResults extends Component {

  render() {

    const { question, total, voteOne, voteTwo, percentageOne, percentageTwo, userAnswer } = this.props
    const { name, avatar, optionOne, optionTwo } = question

    return (
      <div className="container my-5">
        <div className="card border-light">
          <div className="card-header"><h2>Results</h2></div>
          <div className="card-body">
            <div className="card-body-left">
              <img src={avatar} alt={`Avatar of ${name}`} />
            </div>
            <div className="card-body-right">
              <p>{name} asked:</p>
              <div className=
                {userAnswer === 'optionOne'
                  ? "card border-success mb-3"
                  : "card border-secondary mb-3"
                }>
                <div className="card-body">
                  {userAnswer === 'optionOne'
                    ? <span className="badge badge-success float-right py-2 px-2">Your Pick</span>
                    : ''}
                  <p className="card-text">{optionOne}</p>
                  <div className="progress mb-2">
                    <div className="progress-bar bg-warning" style={{ width: `${percentageOne}%` }}>
                      {`${percentageOne}%`}
                    </div>
                  </div>
                  <p><em>{voteOne} out of {total} votes</em></p>
                </div>
              </div>
              <div className=
                {userAnswer === 'optionOne'
                  ? "card border-secondary"
                  : "card border-success"
                }>
                <div className="card-body">
                  {userAnswer === 'optionTwo'
                    ? <span className="badge badge-success float-right py-2 px-2">Your Pick</span>
                    : ''}
                  <p className="card-text">{optionTwo}</p>
                  <div className="progress mb-2">
                    <div className="progress-bar bg-warning" style={{ width: `${percentageTwo}%` }}>
                      {`${percentageTwo}%`}
                    </div>
                  </div>
                  <p><em>{voteTwo} out of {total} votes</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  const voteOne = question.optionOne.votes.length
  const voteTwo = question.optionTwo.votes.length
  const total = voteOne + voteTwo
  const userAnswer = users[authedUser].answers[question.id]

  return {
    question: formatQuestion(question, users[question.author]),
    total,
    voteOne,
    voteTwo,
    percentageOne: formatPercentage((voteOne / total) * 100),
    percentageTwo: formatPercentage((voteTwo / total) * 100),
    userAnswer,
  }
}

export default connect(mapStateToProps)(QuestionResults)