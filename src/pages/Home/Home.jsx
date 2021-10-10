import React from "react"
import Intro from "../../components/intro/Intro"
import Portfolio from "../../components/portfolio/Portfolio"
import Works from "../../components/works/Works"
import Testimonial from "../../components/testimonial/Testimonial"
import Contact from "../../components/contact/Contact"
import "./Home.scss"

function Home() {
    return (
        <div className="sections">
            <Intro />
            <Portfolio />
            <Works />
            <Testimonial />
            <Contact />
        </div>
    )
}

export default Home
