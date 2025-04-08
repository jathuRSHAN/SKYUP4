import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../services/Auth'
import BuyCourseCard from './BuyCourseCard'
import "./course.css"
function Course() {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />

    }
    return (
        <>
            <section className='course'>
                <h2>OUR ONLINE COURSES</h2>
                <div className='container grid2'>

                    <BuyCourseCard />

                </div>



            </section>
        </>
    )
}







export default Course