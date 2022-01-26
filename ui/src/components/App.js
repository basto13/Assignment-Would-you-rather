import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import HomePage from './HomePage';
import Navbar from './Navbar';
import NewQuestion from './NewQuestion';
import ProtectedRoute from './ProtectedRoute';
import Leaderboard from './Leaderboard';
import ViewQuestion from './ViewQuestion';
import ErrorPage from './ErrorPage';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar />
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
              <Route path='/add' element={<ProtectedRoute><NewQuestion /></ProtectedRoute>} />
              <Route path='/leaderboard' element={<ProtectedRoute><Leaderboard/></ProtectedRoute>}/>

              <Route path="/questions/:id" element={<ProtectedRoute><ViewQuestion /></ProtectedRoute>} />
              <Route path="*" element={<ErrorPage/>}/>

            </Routes>
          </Fragment>
        </Router>
      </div>
    )
  }
}

function mapStateToProps({ authUser }) {
  return { authUser };
}

export default connect(mapStateToProps)(App)