import React from 'react';
import { connect } from 'react-redux';
import {
    useNavigate,
} from "react-router-dom";

const PreviewQuestion = (props) => {
    const navigate = useNavigate();

    const selectQuestion = (id) => {
        navigate(`/questions/${id}`);
    }

    const { question, usersAvatar } = props
    const { author } = question
    const optionOne = question.optionOne.text
    
    return (
        <div>
            <h2>Question</h2>
            <div className='PreviewQuestion' onClick={() => selectQuestion(question.id)}>
                <img
                    width={100}
                    height={100}
                    src={usersAvatar}
                    alt={`Avatar of ${author}`}
                    className='avatar'
                />
                <div>{author} asks: {optionOne} or ... </div>
            </div>
        </div>
    )
}

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id]
    const user = users[question.author]
    const usersAvatar = user.avatarURL
    return {
        question,
        usersAvatar
    }
}

export default connect(mapStateToProps)(PreviewQuestion)