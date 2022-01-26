function questionsListSelector({ authedUser, users, questions }) {
    const answeredIdList = Object.keys(users[authedUser.id].answers)
    const q = Object.values(questions);
    const answeredQuestions = q
        .filter(question => answeredIdList.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp)
    const unansweredQuestions = Object.values(questions)
        .filter(question => !answeredIdList.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);
    return {
        answeredQuestions,
        unansweredQuestions
    }
}

module.exports = {
    questionsListSelector
};
