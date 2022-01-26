import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA';

export async function getInitialData() {
    return await Promise.all([_getUsers(), _getQuestions()])
}

export function saveQuestion(info) {
    return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info);
}