import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Link } from 'react-router-dom'

class Question extends Component {
  render() {
    const { question, id } = this.props

    const { name, avatar, optionOne } = question

    return (
      <div className="card-container">
        <div className="card border-light">
          <div className="card-header">{name} asks:</div>
          <div className="card-body">
            <div className="card-body-left">
              <img src={avatar} alt={`Avatar of ${name}`} />
            </div>
            <div className="card-body-right">
              <h4>Would you rather</h4>
              <p>{optionOne}...</p>
              <Link to={`/questions/${id}`}>
                <button>View Poll</button>
              </Link>
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
    question: formatQuestion(question, users[question.author]),
    id,
  }
}

export default connect(mapStateToProps)(Question)