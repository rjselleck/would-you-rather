import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {

  state = {
    toggle: 'answered',
  }

  handleToggle = (e) => {
    e.preventDefault()

    const toggle = e.target.value
    this.setState(() => ({
      toggle
    }))
  }

  render() {

    const { answeredIds, unansweredIds } = this.props;
    console.log('Aanswered: ', answeredIds)
    console.log('Unanswered: ', unansweredIds)

    const { toggle } = this.state

    return (
      <div className="container my-5">
        <div className="button-container">
          <button value="answered" onClick={this.handleToggle}>Answered</button>
          <button value="unanswered" onClick={this.handleToggle} >Unanswered</button>
        </div>
        <div>
          {toggle === 'answered'
            ? answeredIds.map((id) => (
              <div key={id}>
                {/* {console.log(id)} */}
                <Question id={id} />
              </div>
            ))
            : unansweredIds.map((id) => (
              <div key={id}>
                {/* {console.log(id)} */}
                <Question id={id} />
              </div>
            ))
          }
        </div>

        {/* <div className="card-container">
          <div className="card border-light mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h4 className="card-title">Light card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div> */}

      </div>

    )
  }
}



function mapStateToProps({ questions, authedUser, users }) {
  const answeredIds = Object.keys(users[authedUser].answers)
  const unansweredIds = Object.keys(questions)
    .filter(question => !answeredIds.includes(question))
    .sort((a, b) => b.timestamp - a.timestamp)

  return {
    answeredIds,
    unansweredIds,
  }
}

export default connect(mapStateToProps)(Dashboard)