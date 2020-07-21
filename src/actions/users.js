export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ANSWER = 'USER_ANSWER'

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