import React, { Component } from 'react'

class UserResult extends Component {

    render() {
        const { name, answered, addedQuestions, total, avatarURL } = this.props.user
        console.log(this.props.id)



        return (
            <div className='usercard'>
                <div key={this.props.id}>{name}</div>
                <img
                    width={100}
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div >Answered questions: {answered}</div>
                <div >Added questions: {addedQuestions}</div>
                <div>Total: {total}</div>

            </div>
        )
    }
}

export default UserResult;