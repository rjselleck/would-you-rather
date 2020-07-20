import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  render() {

    return (
      <div>
        <h1>Leader Board </h1>
      </div>
    )
  }
}
// mapStateToProps({state},{props})
function mapStateToProps({ authedUser, users, questions }, { id }) {


  return {

  }
}

export default connect(mapStateToProps)(LeaderBoard)