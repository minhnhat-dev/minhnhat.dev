import React from "react"
import styled from "styled-components"
export const Button = styled.button`
    padding: 0;
`
export const Img = styled.img`
    width: 25px;
    height: 25px;
`

function IconReactJS() {
    return (
        <Button className="btn-not-default">
            <Img src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633547071/public/icons8-react-native-240.png"></Img>
        </Button>
    )
}

export default IconReactJS
