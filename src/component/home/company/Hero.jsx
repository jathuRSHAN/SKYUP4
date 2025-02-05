import React from 'react'
import "./hero.css"

export default function Hero() {
    return (
        <><div className="hero d_flex">
            <div className="left">
                <div className="logo">
                    <img src="./hero.png" alt="" />
                </div>
            </div>
            <div className="right">
                <p>hi every one</p>
            </div>
        </div>
        </>
    )
}
