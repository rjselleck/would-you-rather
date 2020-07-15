import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
// import PropTypes from 'prop-types'


class Login extends Component {

  state = {
    selectedUser: '',
    errorMsg: null,
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
    }

    dispatch(setAuthedUser(selectedUser))

    this.setState(() => ({
      selectedUser: ''
    }))
  }


  render() {
    const { userIds } = this.props
    const { errorMsg } = this.state

    return (
      <div>
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
              {userIds.map((id) =>
                <option key={id} value={id}>{id}</option>
              )}
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
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)