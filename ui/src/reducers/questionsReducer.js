import {
    RECEIVE_QUESTIONS,
    ADD_QUESTION_ANSWER,
    SAVE_NEW_QUESTION
} from "../actions/questions";

export default function questions(state = null, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION_ANSWER:
            const { authedUserId, questionId, answer } = action;
            return {
                ...state,
                [questionId]: {
                    ...state[questionId],
                    [answer]: {
                        ...state[questionId][answer],
                        votes: state[questionId][answer].votes.concat(authedUserId)
                    }
                }
            }
        case SAVE_NEW_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state
    }
}