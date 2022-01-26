import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

import { questionsListSelector } from '../selectors/selectors';

import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';

const ViewQuestion = () => {
    let { id } = useParams();
    const question = useSelector(state => state.questions[id])
    const author = useSelector(state => state.users[question.author])
    const { answeredQuestions } = useSelector(questionsListSelector)
    console.log(question);
    if (!question) {
        return <Navigate to="/errorpage" />
    }

    const isAnswered = (question, answeredQuestions) => {
        return answeredQuestions.find(q => q.id === question)
    }

    return (
        <div>
            <div className='questionText'>
                <img
                    width={100}
                    height={100}
                    src={author.avatarURL}
                    alt={`Avatar of ${author.id}`}
                    className='avatar'
                />
                <div>{author.name} asks: Would you rather...</div>
            </div>
            {isAnswered(id, answeredQuestions)
                ? <AnsweredQuestion question={question} />
                : <UnansweredQuestion question={question} />}
        </div>
    )
}

export default ViewQuestion;