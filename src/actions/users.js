export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ANSWER = 'USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function saveUserAnswer(qid, answer, authedUser) {
  return {
    type: USER_ANSWER,
    answer,
    qid,
    authedUser,
  }
}

export function saveUserQuestion(qid, authedUser) {
  return {
    type: ADD_USER_QUESTION,
    qid,
    authedUser,
  }
}