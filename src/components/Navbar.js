import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {

    const { authedUser } = this.props

    return (
      <div>
        <p>Home | New Question | Leader Board </p>
        <p>Hello {authedUser} | Logout</p>

      </div>
    )
  };
};


function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}


export default connect(mapStateToProps)(Navbar);