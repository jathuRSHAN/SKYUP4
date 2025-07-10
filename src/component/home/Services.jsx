import React from "react"
import { services } from "../data"



export const Services = () => {
    return (
        <>
            <section className='services'>
                <div className='container'>
                    <h1>Why Choose Skyup Campus</h1>
                    <div className='content grid3'>
                        {services.map((item) => (
                            <div className='box'>
                                <div className='img'>
                                    <img src={item.cover} alt='' />
                                </div>
                                <h3>{item.title}</h3>
                                <p>
                                    {item.desc.split('\n').map((line, idx) => (
                                        <span key={idx}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}