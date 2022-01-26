import React, { useState } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'

import UserCard from './UserCard';

const LoginPage = (props) => {
    const [redirect, setRedirect] = useState(false)
    const location = useLocation()

    const selectUser = (user) => {
        props.dispatch(setAuthedUser(user))
        setRedirect(true)
    }

    const users = props.users

    if (redirect) {
        if (location.state?.from !== '') {
            return <Navigate to={location.state?.from} />    
        }
        return <Navigate to='/' />
    }

    return (
        <div>
            <h1>Please login to continue</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => selectUser(user)} >
                        <UserCard user={user} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

function mapStateToProps({ users }) {
    return { users: Object.values(users || {}) }
}

export default connect(mapStateToProps)(LoginPage)