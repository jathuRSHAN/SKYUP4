import React from 'react'
//import Start from './startpage/Start'
// import Hero from './company/Hero'
import Course from './course/Course'
import { Services } from './Services'
import { Counter } from './Counter'
import Testimonal from './testimonal/Testimonal'
import HomeHero from './startpage/HomeHero'
import SEOSection from './SEO/SEOSection'


export default function Home() {
    return (
        <>
            {/* <Start /> */}
            <HomeHero />
            <Course />
            <Services />
            <Counter />
            <Testimonal />
            <SEOSection />
            {/* <Hero /> */}
        </>
    )
}
