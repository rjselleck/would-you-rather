import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {

    const { authedUser } = this.props

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
              <NavLink to='/leader-board' exact activeClassName='active' className="nav-link">
                Leader Board
              </NavLink>
            </li>
          </ul>
          <div className="navbar-text">
            <span className="navbar-text-right">
              Hello {authedUser}
            </span>
            <span className="navbar-text-right pl-lg-3 pl-0 mt-3 mt-lg-0">
              Logout
            </span>
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