import React, { Component } from 'react'

class UserCard extends Component {

    render() {
        const { name, avatarURL } = this.props.user

        return (
            <div className='usercard'>
                <div>User is: {name}</div>
                <img
                    width={100}
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
            </div>
        )
    }
}

export default UserCard