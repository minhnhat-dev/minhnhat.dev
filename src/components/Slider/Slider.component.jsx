import styled from "styled-components"
import { mobile } from "../../styles/responsive"
export const SliderContainer = styled.div`
    position: relative;
    display: flex;
    ${mobile({ display: "none" })}
`

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    z-index: 2;
`

export const ArrowIcon = styled.i``
export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX(${props => `-${props.indexSlide}00vw`});
`

export const Slide = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => `#${props.background}`};
`

export const ContentLeft = styled.div`
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
`

export const ContentRight = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100%;
    display: flex;
`

export const InfoSale = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.h1`
    font-weight: 400;
`

export const Description = styled.p`
    margin: 30px 0px;
`
export const Button = styled.button`
    border-radius: 50px;
    width: 150px;
    border: none;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
`

export const Image = styled.img`
    height: 80%;
`
