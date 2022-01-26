import React from 'react';

import PreviewQuestion from './PreviewQuestion';


class AnsweredPool extends React.Component {
    render() {
        return (
            <div>
                <div>Answered questions</div>
                    <ul>
                    {this.props.answeredList.map((question) => (
                      <li key={question.id}>
                        <PreviewQuestion id={question.id} />
                      </li>
                    ))}
                  </ul>                
            </div>
        )
    }
}

export default AnsweredPool;

