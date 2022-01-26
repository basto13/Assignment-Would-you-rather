import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { logOutUser } from "../actions/logoutUser";

class Navbar extends Component {

  handleLogOut() {
    this.props.dispatch(logOutUser())
  }

  render() {
    const {authedUser} = this.props

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/add'>New question</NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard'>Leaderboard</NavLink>
          </li>
        </ul>
        <div>
          {authedUser != null
          ? (
          <><span>Hello {authedUser.name}</span><button onClick={() => this.handleLogOut()}>Log out</button></>
          )

          : ''
        }
        </div>
      </nav>

    )

  }

}

function mapStateToProps({authedUser}) {
  return { authedUser }
}

export default connect(mapStateToProps)(Navbar);