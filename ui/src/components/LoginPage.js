import React, { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom'

import UserCard from './UserCard';

class LoginPage extends React.Component {
    state = {
        'authed': '',
        'redirect': false,
    }

    changeUser(id) {
        this.setState((prevState) => ({
            'authed': id
        }))
    }

    selectUser(user) {
        this.props.dispatch(setAuthedUser(user))
        this.changeUser(user.id)
        this.setState({ redirect: true })
    }

    render() {
        const users = this.props.users
        const { redirect } = this.state

        if (redirect) {
            return <Navigate to='/' />
        }

        return (
            <div>
                <h1>Please login to continue</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id} onClick={() => this.selectUser(user)} >
                            <UserCard user={user} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return { users: Object.values(users) }
}

export default connect(mapStateToProps)(LoginPage)