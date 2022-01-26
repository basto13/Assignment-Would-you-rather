import React from 'react';

import PreviewQuestion from './PreviewQuestion';


class UnansweredPool extends React.Component {
    render() {
        return (
            <div>
                <div>Unanswered questions</div>
                <ul>
                    {this.props.unansweredList.map((question) => (
                        <li key={question.id}>
                            <PreviewQuestion id={question.id} />
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}

export default UnansweredPool;