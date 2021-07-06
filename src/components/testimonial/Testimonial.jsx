import React from "react";
import "./testimonial.scss";

const data = [
    {
        img: "/person/user_1.jpeg",
        content: "Lorem ipsum dolor sitalias atque magni cupiditate aut nihil sed eius deleniti delectus incidunt quaerat commodi sapiente soluta velit, autem quae laborum repudiandae!",
        name: "Mr Tom",
        position: "Senior Developer"
    },
    {
        img: "/person/user_2.jpeg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "Jenny",
        position: "Senior Developer",
        main: true
    },
    {
        img: "/person/user_3.jpeg",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. reprehenderit laudantium saepe, rem, accusamus enim earum veritatis aut ipsa labore incidunt?",
        name: "Dale Jin",
        position: "Senior Developer"
    }
];
function Testimonial() {
    return (
        <div className="testimonial" id="testimonial">
            <h1>Customers</h1>

            <div className="container">
                {data.map((item) => (
                    <div className={item.main ? "card main" : "card"}>
                        <div className="top">
                            <i className="left fab fa-facebook" />
                            <img className="center" src={item.img} alt="" />
                            <i className="right fab fa-youtube" />
                        </div>
                        <div className="content">
                            {item.content}
                        </div>
                        <div className="bottom">
                            <h3>{item.name}</h3>
                            <span>{item.position}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Testimonial;
