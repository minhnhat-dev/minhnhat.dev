import React, { useState } from "react"
import styled from "styled-components"
import "./topbar.scss"
import { PhoneInTalk, MailOutline } from "@material-ui/icons"
import { mobile } from "../../responsive"
import { Link } from "react-router-dom"
const Button = styled.button`
    outline: none;
    padding: 8px 20px;
    border: 4px solid #00b2b2;
    border-radius: 50px;
    margin-right: 40px;
    background-color: white;
    font-weight: 500;
    font-size: 17px;
    ${mobile({
        borderRadius: "20px",
        padding: "4px 7px",
        marginRight: "10px",
        fontSize: "13px",
        border: "2px solid #00b2b2"
    })}
`
function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={`topbar ${menuOpen && "active"}`}>
            <div className="wrapper">
                <div className="left">
                    <Link to="/" className="text-link">
                        <span className="logo">minhnhat.dev</span>
                    </Link>

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
                    <Link to="/cv">
                        <Button className="pointer">My CV</Button>
                    </Link>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1" />
                        <span className="line2" />
                        <span className="line3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
