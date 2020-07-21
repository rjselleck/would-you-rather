import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionAsk from './QuestionAsk'
import QuestionResults from './QuestionResults'

class QuestionSwitch extends Component {
  render() {
    const { id, answered } = this.props
    return (

      <div>
        {answered === true ?
          <QuestionResults id={id} />
          :
          <QuestionAsk id={id} />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }, props) {
  const { id } = props.match.params
  const answered = Object.keys(users[authedUser].answers).includes(id)

  return {
    id,
    answered,
  }
}

export default connect(mapStateToProps)(QuestionSwitch)