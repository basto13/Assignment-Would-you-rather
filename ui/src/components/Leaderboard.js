import React from 'react';
import { connect } from 'react-redux';

import UserResult from './UserResult';


class Leaderboard extends React.Component {
    render() {
        const results = this.props.results
        console.log(results)


        return (
            <div>
                <div>Leaderboard</div>
                <ul>
                    {results.map(user => (
                        <li key={user.id}>
                            <UserResult user={user} id={user.id} />
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    const results = Object.values(users || {})
        .map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answered: Object.values(user.answers).length,
            addedQuestions: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a, b) => a.total - b.total)
        .reverse();
        console.log('first results', results)
    return {
        results: Object.values(results),
        authedUser,
        
    };
}

export default connect(mapStateToProps)(Leaderboard);


