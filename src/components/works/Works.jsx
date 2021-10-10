import React, { useState } from "react"
import "./works.scss"

const data = [
    {
        id: "1",
        icon: "./assets/mobile.png",
        title: "Web Design",
        desc: "Lorem Ipsum is simply dummy text "
    },
    {
        id: "2",
        icon: "./assets/globe.png",
        title: "Mobile Application",
        desc: "Lorem Ipsum is simply dummy text of."
    },
    {
        id: "3",
        icon: "./assets/writing.png",
        title: "Branding",
        desc: "Lorem Ipsum is simply dummy text ."
    }
]

function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleClick = slide => {
        if (slide === "left") {
            const newCurrentSlide = currentSlide > 0 ? currentSlide - 1 : 2
            setCurrentSlide(newCurrentSlide)
        }

        if (slide === "right") {
            const newCurrentSlide = currentSlide < data.length - 1 ? currentSlide + 1 : 0
            setCurrentSlide(newCurrentSlide)
        }
    }

    return (
        <div className="works" id="projects">
            <h1>My Projects</h1>
        </div>
    )
}

export default Works
