import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../services/Auth'


function Course() {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />

    }
    return (
        <div>Course</div>
    )
}

export default Course