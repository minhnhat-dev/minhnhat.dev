import React, { useState } from "react";
import "./contact.scss";

function Contact() {
    const [message, setMessage] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="/assets/email.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form action="" onSubmit={handleOnSubmit}>
                    <input type="email" placeholder="Email" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
                    <button type="submit">Send</button>
                </form>
                {message && <span>Thank you I'll reply soon ^^</span>}
            </div>
        </div>
    );
}

export default Contact;
