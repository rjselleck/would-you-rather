import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionAsk from './QuestionAsk'
import QuestionResults from './QuestionResults'

class QuestionSwitch extends Component {
  render() {
    const { id, answered } = this.props
    return (
      <div className="container my-5">
        {answered === true ?
          // <p>Show Results...</p>
          <QuestionResults id={id} />
          :
          // <p>Ask Question...</p>
          <QuestionAsk id={id} />}
      </div>
    )
  }
}



// mapStateToProps({state},{props})
function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const answered = Object.keys(users[authedUser].answers).includes(id)


  return {
    id,
    answered,
  }
}

export default connect(mapStateToProps)(QuestionSwitch)