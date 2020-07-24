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

export function saveQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}