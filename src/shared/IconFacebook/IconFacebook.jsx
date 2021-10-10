import React from "react"
import styled from "styled-components"
export const Button = styled.button`
    padding: 5px;
    border-radius: 50%;
    background-color: lightblue;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const Img = styled.img`
    width: 60px;
    height: 60px;
`

function IconFacebook() {
    return (
        <Button className="btn-not-default">
            <Img src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633549520/public/icons8-facebook-400.png"></Img>
        </Button>
    )
}

export default IconFacebook
