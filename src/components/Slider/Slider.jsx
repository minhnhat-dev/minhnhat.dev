import React, { useState } from "react"
import Data from "../../data"
import {
    SliderContainer,
    ArrowIcon,
    Arrow,
    Wrapper,
    Slide,
    ContentLeft,
    ContentRight,
    Image,
    InfoSale,
    Header,
    Description,
    Button
} from "./Slider.component"
import { Link } from "react-router-dom"

function Slider() {
    const [indexSlide, setIndexSlide] = useState(0)

    const handleOnClickArrow = arrow => {
        const maxIndex = Data.banners.length - 1
        if (arrow === "left") {
            setIndexSlide(indexSlide > 0 ? indexSlide - 1 : maxIndex)
        } else {
            setIndexSlide(indexSlide < maxIndex ? indexSlide + 1 : 0)
        }
    }

    return (
        <SliderContainer>
            <Arrow direction="left" onClick={() => handleOnClickArrow("left")}>
                <ArrowIcon className="fs-30 fas fa-caret-left" />
            </Arrow>
            <Wrapper indexSlide={indexSlide}>
                {Data.banners.map(banner => (
                    <Slide background={banner.background}>
                        <ContentLeft>
                            <Image src={banner.src} />
                        </ContentLeft>
                        <ContentRight>
                            <InfoSale>
                                <Header className="fs-40">{banner.header}</Header>
                                <Description className="fs-25 fw-400">{banner.description}</Description>
                                <Link className="text-link" to="/products">
                                    <Button>Shop now</Button>
                                </Link>
                            </InfoSale>
                        </ContentRight>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleOnClickArrow("right")}>
                <ArrowIcon className="fs-30 fas fa-caret-right" />
            </Arrow>
        </SliderContainer>
    )
}

export default Slider
