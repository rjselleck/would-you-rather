export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveQuestionAnswer(qid, answer, authedUser) {
  return {
    type: ANSWER_QUESTION,
    answer,
    qid,
    authedUser,
  }
}

export function saveQuestion(optionOne, optionTwo, authedUser) {
  // console.log('ONE: ', optionOne)
  // console.log('TWO: ', optionTwo)
  // console.log('USER: ', authedUser)
  return {
    type: ADD_QUESTION,
    optionOne,
    optionTwo,
    authedUser,
  }
}