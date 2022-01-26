import { getInitialData } from "../services/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { addAnswerToUser } from "./users";
import { addQuestionAnswer } from "./questions"; 
import { saveQuestionAnswer } from "../services/api";

import { addNewQuestionToUser } from "./users";
import { saveQuestion } from "../services/api";
import { saveNewQuestion } from "./questions";


export function handleInitialData(){
    return async dispatch => {
        const [users, questions] = await getInitialData()
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
    }
}

export function handleSaveQuestionAnswer(authedUserId, questionId, answer) {
    return async dispatch => {
      dispatch(addAnswerToUser(authedUserId, questionId, answer));
      dispatch(addQuestionAnswer(authedUserId, questionId, answer));
  
      try {
        saveQuestionAnswer(authedUserId, questionId, answer)
      } catch (e) {
        console.warn('Error in handleSaveQuestionAnswer:', e);
      }
    };
  }

export function handleSaveNewQuestion(optionOne, optionTwo, author) {
  return async dispatch => {
    const question = await saveQuestion({ optionOneText: optionOne, optionTwoText: optionTwo, author: author.id })

    dispatch(saveNewQuestion(question));
    dispatch(addNewQuestionToUser(question));
  };
}