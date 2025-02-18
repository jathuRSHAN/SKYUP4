import React from "react"
import { coursesCard } from "../../data"
import "./course.css"


const CourseCard = () => {
    return (
        <>
            {coursesCard.map((val) => (

                <div className={val.available ? "items shadow" : "shadow items not-available"}>
                    <div className='img'>
                        <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                        <div className='details flexSB'>
                            {val.courTeacher.map((details) => (
                                <>
                                    <div className='box'>
                                        <div className='dimg'>
                                            <img src={details.dcover} alt='' />
                                        </div>
                                        <div className='para'>
                                            <h4>{details.name}</h4>
                                        </div>
                                        <span>{details.totalTime}</span>
                                    </div>

                                </>
                            ))}
                        </div>
                        <h1>{val.coursesName}</h1>
                        <p>{val.desc}</p>
                        {/* <div className='price'>
                            <h3>
                                {val.priceAll} / {val.pricePer}
                            </h3>
                        </div> */}
                        <div><a href="https://forms.gle/wwGhRfw3ziSAcYUh6"><button className='outline-btn'> ENROLL NOW !</button></a></div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default CourseCard