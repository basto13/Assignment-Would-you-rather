import React from 'react';
import { connect } from 'react-redux';

import AnsweredPool from './AnsweredPool';
import UnansweredPool from './UnansweredPool';

import {questionsListSelector} from '../selectors/selectors'

class HomePage extends React.Component {

  state = {
    showAnswered: true
  }

  handleClick() {
    this.setState(
      state => ({
        showAnswered: !this.state.showAnswered
      }))
  }

  render() {
    const answeredList = this.props.answeredQuestions
    const unansweredList = this.props.unansweredQuestions
    return (
      <div>
        <h2>HOME PAGE</h2>
        <button onClick={() => this.handleClick()}>{this.state.showAnswered ? 'SHOW ANSWERED QUESTIONS' : 'SHOW UNANSWERED QUESTIONS'}</button>
        <div>
          {this.state.showAnswered 
          ? <UnansweredPool unansweredList={unansweredList}/> 
          : <AnsweredPool answeredList={answeredList}/>}
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return questionsListSelector(state)
};

export default connect(mapStateToProps)(HomePage)