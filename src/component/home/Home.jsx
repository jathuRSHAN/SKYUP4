import React from 'react'
import Start from './startpage/Start'
// import Hero from './company/Hero'
import Course from './course/Course'
import { Services } from './Services'
import { Counter } from './Counter'
import Testimonal from './testimonal/Testimonal'


export default function Home() {
    return (
        <>
            <Start />
            <Course />
            <Services />
            <Counter />
            <Testimonal />
            {/* <Hero /> */}
        </>
    )
}
