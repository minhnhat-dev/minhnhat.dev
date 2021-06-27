import React, { useState } from "react";
import "./topbar.scss";
import { PhoneInTalk, MailOutline } from "@material-ui/icons";

function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={`topbar ${menuOpen && "active"}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">minhnhat.dev</a>
                    <div className="info">
                        <PhoneInTalk className="icon" />
                        <span className="text">0707922483</span>
                    </div>
                    <div className="info">
                        <MailOutline className="icon" />
                        <span className="text">minhnhat.devweb@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1" />
                        <span className="line2" />
                        <span className="line3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
