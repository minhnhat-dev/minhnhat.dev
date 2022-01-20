import React, { useState, useEffect } from 'react'
import {Container, Image} from './LightBox.cpn'
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
const modelStyle = {
    overlay: {
        zIndex: 10000
      }
}

function LightBox({images= []}) {
    const [imageUrls, setImageUrls] = useState(images)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
 
    return (
        <Container>
             {isOpen && (
                <Lightbox
                    reactModalStyle={modelStyle}
                    mainSrc={imageUrls[photoIndex]}
                    nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
                    prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imageUrls.length)}
                />
            )}
             <button type="button" onClick={() => setIsOpen(true)}>
                 Open Lightbox
             </button>
            <div>
                {images.map((image, index) => {
                    return  <Image key={index} src={image} onClick={() => {
                        setIsOpen(true)
                        setPhotoIndex(index)
                    }}/>
                })}
            </div>
       
        </Container>
    )
}

export default LightBox
