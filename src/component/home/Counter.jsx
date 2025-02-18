import React from "react"
import CountUp from "react-countup"
import { project } from "../data"

//yarn or npm add react-countup

export const Counter = () => {
    return (
        <>
            <div className='counter container'>
                <div className='bg grid3 grid4'>

                    {project.map((item) => (
                        <div className='box'>
                            <i>{item.icon}</i>
                            <h1 className='heading'>
                                <CountUp enableScrollSpy duration={2} end={item.num} />
                            </h1>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}