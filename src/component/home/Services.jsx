import React from "react"
import { services } from "../data"



export const Services = () => {
    return (
        <>
            <section className='services'>
                <div className='container'>
                    <h1>Benefits About Online Learning</h1>
                    <div className='content grid3'>
                        {services.map((item) => (
                            <div className='box'>
                                <div className='img'>
                                    <img src={item.cover} alt='' />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}