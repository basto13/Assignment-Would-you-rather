export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION'

export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestionAnswer(authedUserId, questionId, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUserId,
    questionId,
    answer
  }
}

export function saveNewQuestion(question){
  return {
    type: SAVE_NEW_QUESTION,
    question
  }
}