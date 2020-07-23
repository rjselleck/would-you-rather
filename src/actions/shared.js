import { getInitialData } from '../utils/api.js'
import { receiveUsers, saveUserAnswer } from '../actions/users'
import { receiveQuestions, saveQuestionAnswer, saveQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

const AUTHED_ID = 'sarahedo'
// const AUTHED_ID = ''


// Action Creators
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

export function handleAnsweredQuestion(qid, answer, authedUser) {

  return (dispatch) => {
    const info = {
      authedUser,
      qid,
      answer,
    }
    _saveQuestionAnswer(info)
      .then(() => {
        dispatch(saveUserAnswer(qid, answer, authedUser))
        dispatch(saveQuestionAnswer(qid, answer, authedUser))

      })
  }
}

export function handleAddQuestion(optionOne, optionTwo, authedUser) {
  return (dispatch) => {
    const info = {
      authedUser,
      optionOne,
      optionTwo,
    }
    // console.log('ONE: ', optionOne)
    // console.log('TWO: ', optionTwo)
    // console.log('USER: ', authedUser)
    _saveQuestion(info)
      .then(() => {
        dispatch(saveQuestion(optionOne, optionTwo, authedUser))
      })
  }
}