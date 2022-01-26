import {
    RECEIVE_USERS,
    ADD_ANSWER_TO_USER,
    ADD_NEW_QUESTION_TO_USER,
} from "../actions/users";

export default function usersReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_ANSWER_TO_USER:
            const { authedUserId, questionId, answer } = action
            return {
                ...state,
                [authedUserId]: {
                    ...state[authedUserId],
                    answers: {
                        ...state[authedUserId].answers, 
                        [questionId]: answer
                    }
                }
            }
        case ADD_NEW_QUESTION_TO_USER:
            const {id, authedUser} = action
            return{
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat(id)
                }
            }

        default:
            return state
    }
}
