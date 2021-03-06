import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {

    const { userName, loggedin } = this.props


    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">Would You Rather...</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          {loggedin ? (
            <Fragment>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to='/' exact activeClassName='active' className="nav-link">
                    Home
              </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/add' exact activeClassName='active' className="nav-link">
                    New Question
              </NavLink>
                </li>
                <li className="nav-item">
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
                <span>Hello {userName}</span>
              </div>
            </Fragment>
          ) : (
              <Fragment>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink to='/' exact activeClassName='active' className="nav-link">
                      Home
                </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/add' exact activeClassName='active' className="nav-link">
                      New Question
                </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/leaderboard' exact activeClassName='active' className="nav-link">
                      Leader Board
                </NavLink>
                  </li>
                </ul>
              </Fragment>
            )}
        </div>
      </nav>
    )
  }
}


function mapStateToProps({ authedUser, users }) {
  // const user = users[authedUser].name
  let userName = ''
  let loggedin = false

  if (authedUser !== null) {
    userName = users[authedUser].name
    loggedin = true
  }
  // if (authedUser === null) {
  //   console.log('YES')
  // } else {
  //   console.log('NO')
  //   userName = users[authedUser].name
  //   loggedin = true
  // }

  return {
    userName,
    loggedin
  }
}

export default connect(mapStateToProps)(Navbar);