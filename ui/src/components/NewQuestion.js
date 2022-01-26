import React from 'react';
import { Navigate } from 'react-router';
import { connect } from 'react-redux';

import { handleSaveNewQuestion } from '../actions/shared'

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      optionOne: '',
      optionTwo: ''
    }
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
    return
  }

  isDisabled() {
    const { optionOne, optionTwo } = this.state
    return (optionOne.length > 0 && optionTwo.length > 0)
  }

  async handleSubmit(e) {
    e.preventDefault()
    let optionOne = this.state.optionOne
    let optionTwo = this.state.optionTwo
    let authedUser = this.props.authedUser

    await this.props.dispatch(handleSaveNewQuestion(optionOne, optionTwo, authedUser))

    this.setState((prevState) => ({
      ...prevState,
      redirect: true
    }))
    console.log(this.state.questionId)
  }


  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }
    return <div>
      <div>Would you rather</div>
      <input
        type='text'
        name='optionOne'
        placeholder='Add option 1'
        value={this.state.optionOne}
        onChange={(e) => this.handleChange(e)}
      />
      <input
        type='text'
        name='optionTwo'
        placeholder='Add option 2'
        value={this.state.optionTwo}
        onChange={(e) => this.handleChange(e)}
      />
      <button type='submit' disabled={!this.isDisabled()} onClick={async (e) => await this.handleSubmit(e)}>Add Question</button>
    </div>
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestion);