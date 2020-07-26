import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'

class QuestionNew extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    errorMsg: null,
    toHome: false,
  }

  handleQuestionOneChange = (e) => {
    e.preventDefault()
    this.setState({
      optionOne: e.target.value
    })
  }
  handleQuestionTwoChange = (e) => {
    e.preventDefault()
    this.setState({
      optionTwo: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state

    if (optionOne === '' || optionTwo === '') {
      this.setState(() => ({
        errorMsg: 'Please enter two options!'
      }))
    } else {
      const { dispatch, authedUser } = this.props
      dispatch(handleAddQuestion(optionOne, optionTwo, authedUser))

      this.setState({
        selectedOption: '',
        toHome: true,
      })
    }

  }



  render() {

    const { optionOne, optionTwo, errorMsg, toHome } = this.state

    if (toHome === true) {
      return <Redirect to={`/`} />
    }
    return (
      <div className="container my-5">
        <div className="card border-light">
          <div className="card-header"><h3>Would You Rather</h3></div>
          <div className="card-body">
            {errorMsg
              ? <p className="text-danger">{errorMsg}</p>
              : null
            }
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Option One</label>
                <input type="text" className="form-control" id="questionOne" placeholder="Enter Option One" value={optionOne} onChange={this.handleQuestionOneChange} />
              </div>
              <div className="form-group">
                <label>Option Two</label>
                <input type="text" className="form-control" id="questionTwo" placeholder="Enter Option Two" value={optionTwo} onChange={this.handleQuestionTwoChange} />
              </div>
              <button type="submit" className="btn btn-outline-primary mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
// mapStateToProps({state},{props})
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionNew)