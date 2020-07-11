import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
// import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom';
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Login from './Login'
import Navbar from './Navbar'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {

    const { authedUser } = this.props;

    return (
      <Router>
        <LoadingBar />
        <div>
          <h1>Would You Rather</h1>
          {this.props.loading === true
            ? null
            : <div>
              {authedUser ?
                <Fragment>
                  <Navbar />
                  <Dashboard />
                </Fragment>
                :
                <Login />
              }
            </div>
          }
        </div>
      </Router>
    )
  }
}


function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
