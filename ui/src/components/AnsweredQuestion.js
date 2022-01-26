import React from "react";
import { useSelector } from 'react-redux';

const AnsweredQuestion = ({question}) => {
    const authedUser = useSelector(state => state.authedUser)

    const showAnswer = (question, authedUser) => {
        return question.optionOne.votes.includes(authedUser.id)

    }
    
    const totalVotes= (question.optionOne.votes.length + question.optionTwo.votes.length)
    
    const showPercentage = (option, totalVotes) => {
        const votes = (Math.round(100 * option) / totalVotes).toFixed(2)
        return votes
    }

    return (
        <div>
            <div style={{color: showAnswer(question, authedUser) ? 'green' : 'red' }}>Option 1: {question.optionOne.text}</div>
            <div>{question.optionOne.votes.length} users voted for Option 1 in total.</div>
            <div>{showPercentage(question.optionOne.votes.length, totalVotes)} % voted.</div>

            <div style={{color: !showAnswer(question, authedUser) ? 'green' : 'red' }}>Option 2: {question.optionTwo.text}</div>
            <div>{question.optionTwo.votes.length} users voted for Option 2 in total.</div>
            <div>{showPercentage(question.optionTwo.votes.length, totalVotes)} % voted.</div>


            <div>results of voting</div>
        </div>

    )
}

export default AnsweredQuestion;