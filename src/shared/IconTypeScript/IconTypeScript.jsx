import React from "react"
import styled from "styled-components"
export const Button = styled.button`
    padding: 0;
`
export const Img = styled.img`
    width: 25px;
    height: 25px;
`

function IconTypeScript() {
    return (
        <Button className="btn-not-default">
            <Img src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633547072/public/icons8-typescript-240.png"></Img>
        </Button>
    )
}

export default IconTypeScript
