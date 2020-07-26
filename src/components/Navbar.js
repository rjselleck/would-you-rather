import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {

    const { authedUser } = this.props

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">Would You Rather...</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <span className="nav-link">Home</span> */}
              <NavLink to='/' exact activeClassName='active' className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <span className="nav-link">New Question</span> */}
              <NavLink to='/new' exact activeClassName='active' className="nav-link">
                New Question
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <span className="nav-link">Leader Board</span> */}
              <NavLink to='/leaderboard' exact activeClassName='active' className="nav-link">
                Leader Board
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/logout' className="nav-link">
                Logout
              </NavLink>
            </li>
          </ul>
          <div className="navbar-text">
            <span>Hello {authedUser}</span>
          </div>
        </div>
      </nav>
    )
  };
};


function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}


export default connect(mapStateToProps)(Navbar);