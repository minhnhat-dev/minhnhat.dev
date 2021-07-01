import React, { useState } from "react";
import "./works.scss";

const data = [
    {
        id: "1",
        icon: "./assets/mobile.png",
        title: "Web Design",
        desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
        id: "2",
        icon: "./assets/globe.png",
        title: "Mobile Application",
        desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: "3",
        icon: "./assets/writing.png",
        title: "Branding",
        desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
];

function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (slide) => {
        if (slide === "left") {
            const newCurrentSlide = currentSlide > 0 ? currentSlide - 1 : 2;
            setCurrentSlide(newCurrentSlide);
        }

        if (slide === "right") {
            const newCurrentSlide = currentSlide < data.length - 1 ? currentSlide + 1 : 0;
            setCurrentSlide(newCurrentSlide);
        }
    };

    return (
        <div className="works" id="projects">
            <div className="header">
                <h1>My Projects</h1>
                <span>When I'm free time, zzzzzz I'm learn and make some projects</span>
            </div>
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                    alt=""
                                />
                                <img
                                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                    alt=""
                                />
                                <img
                                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                    alt=""
                                />
                                <img
                                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                    alt=""
                                />
                                <img
                                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                    alt=""
                                />
                                <img
                                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                    alt=""
                                />

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <i className="arrow left fas fa-chevron-right" onClick={(e) => handleClick("left")} />
            <i className="arrow right fas fa-chevron-right" onClick={(e) => handleClick("right")} />
        </div>
    );
}

export default Works;
