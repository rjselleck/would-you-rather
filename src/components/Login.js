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
        <hr></hr>
        <h3>LOGIN NOW</h3>
        {errorMsg && (
          <div>{errorMsg}</div>
        )}
        <form id="login-form" onSubmit={this.handleSubmit}>
          <select id="user-select" onChange={(e) => this.handleChangeSelect(e)}>
            <option value="">Please Choose</option>
            {userIds.map((id) =>
              <option key={id} value={id}>{id}</option>
            )}
          </select>
          <button id="login-button" type="submit">Login</button>
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