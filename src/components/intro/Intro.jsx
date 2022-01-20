import React, { useEffect, useRef } from "react"
import { init } from "ityped"
import "./intro.scss"

function Intro() {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            typeSpeed: 150,
            backSpeed: 100,
            backDelay: 500,
            strings: ["NodeJS", "ReactJS", "DevOps"]
        })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="content">
                <img className="gradient-border avatar" src="assets/bg-1.jpg" alt="" />
                <div className="left">
                    <div className="container">
                        <img className="gradient-border avatar" src="person/it-me.jpg" alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2>Hi There, I'm</h2>
                        <h1>Nguyen Minh Nhat</h1>
                        <h3>
                            I'm Developer <span ref={textRef} />
                        </h3>
                    </div>

                    <a href="#skills" className="text-link">
                        <i className="icon_action fas fa-chevron-down" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro
