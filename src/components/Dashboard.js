import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {

  state = {
    toggle: 'unanswered',
  }

  handleToggle = (e) => {
    e.preventDefault()

    const toggle = e.target.value
    this.setState(() => ({
      toggle
    }))
  }

  render() {

    const { answeredQuestions, unansweredQuestions } = this.props;
    const { toggle } = this.state

    let btnAnsweredClass, btnUnansweredClass = ''

    if (toggle === 'unanswered') {
      btnAnsweredClass = 'btn btn-primary disabled'
      btnUnansweredClass = 'btn btn-primary '
    } else {
      btnAnsweredClass = 'btn btn-primary '
      btnUnansweredClass = 'btn btn-primary disabled'
    }

    return (
      <div className="container my-5">
        <div className="button-container">
          <button className={btnUnansweredClass} value="unanswered" onClick={this.handleToggle} >Unanswered</button>
          <button className={btnAnsweredClass} value="answered" onClick={this.handleToggle}>Answered</button>
        </div>
        <div>
          {toggle === 'answered'
            ? answeredQuestions.map((id) => (
              <div key={id}>
                <Question id={id} />
              </div>
            ))
            : unansweredQuestions.map((id) => (
              <div key={id}>
                <Question id={id} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}


function mapStateToProps({ questions, authedUser, users }) {
  const answeredIds = Object.keys(users[authedUser].answers)

  const answeredQuestions = Object.keys(questions)
    .filter(question => answeredIds.includes(question))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  const unansweredQuestions = Object.keys(questions)
    .filter(question => !answeredIds.includes(question))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    answeredIds,
    answeredQuestions,
    unansweredQuestions
  }
}

export default connect(mapStateToProps)(Dashboard)