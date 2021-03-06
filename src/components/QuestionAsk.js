import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleAnsweredQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import PageNotFound from "./PageNotFound";

class QuestionAsk extends Component {
  state = {
    selectedOption: '',
    errorMsg: null,
    toResults: false,
  }
  handleOptionSelected = (e) => {
    e.preventDefault()

    const selectedOption = e.target.value

    this.setState({
      selectedOption
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { selectedOption } = this.state

    if (selectedOption === '') {
      this.setState(() => ({
        errorMsg: 'Please make a choice!'
      }))
    } else {
      const { dispatch, qid, authedUser } = this.props
      dispatch(handleAnsweredQuestion(qid, selectedOption, authedUser))

      this.setState({
        selectedOption: '',
        toResults: true,
      })
    }
  }

  render() {

    const { question, qid, to404 } = this.props
    const { name, avatar, optionOne, optionTwo } = question
    const { errorMsg, toResults } = this.state

    if (to404 === true) {
      return <PageNotFound />
    }

    if (toResults === true) {
      return <Redirect to={`/questions/${qid}`} />
    }

    return (
      <div className="container my-5">
        <div className="card-container">
          <p className="text-danger">{errorMsg}</p>
          <div className="card border-light">
            <div className="card-header">{name} asks:</div>
            <div className="card-body">
              <div className="card-body-left">
                <img src={avatar} alt={`Avatar of ${name}`} />
              </div>
              <div className="card-body-right">
                <h4 className="mb-3">Would you rather</h4>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="questions" id="optionOne" value="optionOne" onChange={this.handleOptionSelected} />
                    <label className="form-check-label">
                      {optionOne}
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="radio" name="questions" id="optionTwo" value="optionTwo" onChange={this.handleOptionSelected} />
                    <label className="form-check-label">
                      {optionTwo}
                    </label>
                  </div>
                  <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
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
  let to404 = true
  let validQuestion = ''

  if (question !== undefined) {
    to404 = false
    validQuestion = formatQuestion(question, users[question.author])
  }

  return {
    question: validQuestion,
    qid: id,
    authedUser,
    to404,
  }
}

export default connect(mapStateToProps)(QuestionAsk)