import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
// import PropTypes from 'prop-types'


class Login extends Component {

  state = {
    selectedUser: '',
    errorMsg: null,
    toDashboard: false,
  }

  handleChangeSelect = (e) => {
    e.preventDefault()

    const selectedUser = e.target.value

    this.setState(() => ({
      selectedUser
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { selectedUser } = this.state
    const { dispatch } = this.props

    if (selectedUser === '') {
      this.setState(() => ({
        errorMsg: 'Please select an actual user!'
      }))
    } else {
      dispatch(setAuthedUser(selectedUser))

      this.setState(() => ({
        selectedUser: '',
        toDashboard: true,
      }))
    }
  }

  render() {
    const { users } = this.props
    const { errorMsg, toDashboard } = this.state

    if (toDashboard === true) {
      return <Redirect to={`/`} />
    }

    return (
      <div className="container my-5">
        <h1 className="text-center">Would You Rather</h1>
        <form id="login-form" onSubmit={this.handleSubmit}>
          <div className="text-center">
            {errorMsg
              ? <h4 className="my-5 text-danger">{errorMsg}</h4>
              : <h4 className="my-5">Choose Your Player</h4>
            }
          </div>
          <div className="form-group">
            <select id="user-select" className="custom-select" onChange={(e) => this.handleChangeSelect(e)}>
              <option value="">Please Choose</option>
              {
                Object.keys(users).map(user =>
                  <option key={user} value={user}>
                    {users[user].name}
                  </option>)
              }
            </select>
            <div className="my-3">
              <button id="login-button" type="submit" className="btn btn-primary btn-block">Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)