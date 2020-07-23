import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION:
      const { qid, answer, authedUser } = action

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }

    case ADD_QUESTION:
      const { optionOne, optionTwo } = action
      console.log('ONE: ', optionOne)
      console.log('TWO: ', optionTwo)
      console.log('USER: ', authedUser)
      return {

      }

    default:
      return state
  }
}