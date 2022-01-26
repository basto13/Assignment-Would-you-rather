import React from "react";
import { connect } from "react-redux";
import { Navigate, useLocation } from 'react-router-dom'
import { Component } from 'react';


const ProtectedRoute = (props) => {
    const location = useLocation()
    const { children, authedUser } = props;
    console.log(authedUser)

    return !!authedUser ? children : <Navigate to="/login" state={{from: location}} />;
}


function mapStateToProps({ authedUser }){
    return {authedUser}
}

export default connect(mapStateToProps)(ProtectedRoute);