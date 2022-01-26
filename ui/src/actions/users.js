export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_NEW_QUESTION_TO_USER = 'ADD_NEW_QUESTION_TO_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addAnswerToUser(authedUserId, questionId, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUserId,
    questionId,
    answer
  };
}

export function addNewQuestionToUser({ id, author }) {
  return {
    type: ADD_NEW_QUESTION_TO_USER,
    id,
    authedUser: author
  };
}