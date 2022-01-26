import React from "react";
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'
import { Component } from 'react';


class ProtectedRoute extends Component {
    render() {
        const { children, authedUser } = this.props;

        this.children = children;
        this.isAuthenticated = !!authedUser;

        return this.isAuthenticated ? this.children : <Navigate to="/login" />;
    }
}


function mapStateToProps({ authedUser }){
    return {authedUser}
}

export default connect(mapStateToProps)(ProtectedRoute);