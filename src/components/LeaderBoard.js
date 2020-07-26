import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  render() {

    const { userData } = this.props

    return (
      <div className="container my-5">
        <div className="pt-3 pl-3">
          <h2>Leader Board</h2>
        </div>
        {userData.map((user) => (
          <Fragment>
            <div key={user.id} className="card-container">
              <div className="card border-light">
                <div className="card-header">
                  <div className="card-body">
                    <div className="card-body-left">
                      <img src={user.avatar} alt={`Avatar of ${user.name}`} />
                    </div>
                    <div className="card-body-right">
                      <div className="score-box">
                        <strong>SCORE</strong>
                        <br></br>
                        <span>{user.score}</span>
                      </div>
                      <h4>{user.name}</h4>
                      <p>Answered Questions: {user.answerCount}
                        <br />reated Questions: {user.questionCount} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>

        ))}

      </div>


    )
  }
}

function mapStateToProps({ users }) {
  const userData = Object.values(users).map(user => ({
    id: user.id,
    name: user.name,
    avatar: user.avatarURL,
    answerCount: Object.values(user.answers).length,
    questionCount: user.questions.length,
    score: Object.values(user.answers).length + user.questions.length
  })).sort((a, b) => b.score - a.score)

  return {
    userData
  }
}

export default connect(mapStateToProps)(LeaderBoard)