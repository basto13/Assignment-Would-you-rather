import {combineReducers} from 'redux';
import authedUser from './authedUserReducer';
import users from './usersReducer';
import questions from './questionsReducer';

export default combineReducers({
    authedUser,
    users,
    questions
})
