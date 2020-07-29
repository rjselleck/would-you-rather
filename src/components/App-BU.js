import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
// import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Login from './Login'
import Navbar from './Navbar'
import QuestionNew from './QuestionNew'
import QuestionSwitch from './QuestionSwitch'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {

    const { authedUser } = this.props

    return (
      <Router>
        <LoadingBar />
        <div>
          {this.props.loading === true
            ? null
            : <div>
              {authedUser ?
                <Fragment>
                  <Navbar />
                  {/* <Dashboard /> */}
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:id' component={QuestionSwitch} />
                  <Route path='/new' exact component={QuestionNew} />
                  <Route path='/leaderboard' exact component={LeaderBoard} />
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
