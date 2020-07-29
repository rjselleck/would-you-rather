import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
// import LoadingBar from 'react-redux-loading'
// import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom';
import { handleInitialData } from '../actions/shared'


import Routes from './Routes'
import Navbar from './Navbar'
import Login from './Login';


class App extends Component {
  componentDidMount() {
    console.log("MOUNT")
    this.props.dispatch(handleInitialData())
  }
  render() {

    const { authedUser } = this.props

    return (
      <Router>
        <Fragment>
          <div>
            {authedUser
              ?
              <Fragment>
                <Navbar />
                <Routes />
              </Fragment>
              :
              <Login />
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  console.log('AU: ', authedUser)
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
