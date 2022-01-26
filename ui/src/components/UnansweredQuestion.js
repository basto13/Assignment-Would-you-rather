import React from "react"
import { useSelector, useDispatch } from 'react-redux'; 

import { handleSaveQuestionAnswer } from "../actions/shared";

const UnansweredQuestion = ({question}) => {

    const dispatch = useDispatch()

    const authedUser = useSelector(state => state.authedUser)
    const {questionId} = question.id
    
    const handleChange = (e, questionId, answer) => {
        e.preventDefault()
        dispatch(handleSaveQuestionAnswer(authedUser.id, question.id, answer))
    }

    return (
        <div>
            <div>
                Option 1 {question.optionOne.text} or 
            </div>
            <div>
                Option 2 {question.optionTwo.text}
            </div>
            <button onClick={(e) => {handleChange(e, questionId, 'optionOne')}}>Vote for Option 1</button>
            <button onClick={(e) => {handleChange(e, questionId, 'optionTwo')}}>Vote for Option 2</button>
        </div>
    )
}

export default UnansweredQuestion;

