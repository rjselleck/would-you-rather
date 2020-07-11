import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    const { authedUser } = this.props;
    return (
      <div>
        <h3>Questions</h3>
        <p>AuthedUser: {authedUser}</p>
        <ul>
          {this.props.questionIds.map((id) =>
            <li key={id}>
              <Question id={id} />
            </li>
          )}
        </ul>
      </div >
    )
  }
}



function mapStateToProps({ questions, authedUser }) {

  return {
    questionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    authedUser,

  }
}

export default connect(mapStateToProps)(Dashboard)