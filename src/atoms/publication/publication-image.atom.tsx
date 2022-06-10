import { useEffect, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import { ImageArrowStyles, ImageWrapperStyles, PublicationCardImageStyles } from "../../styles";

interface ImagesProps {
  images: string[];
}

export function PublicationImage( { images }:ImagesProps ) {
  const [imgShown, setImgShown] = useState(0)
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);


  useEffect(() => {
    setShowLeft(imgShown > 0);
    setShowRight(imgShown < images.length - 1)

  }, [imgShown, images])

  const changeImageShown = (direction: string) => {
    setImgShown(direction === 'right' ? imgShown + 1 : imgShown - 1);
  }
  
  return (
    <div style={PublicationCardImageStyles}>
      <div style={ImageArrowStyles('left', showLeft)} onClick={() => changeImageShown('left')}>
        <LeftArrowIcon />
      </div>
      <div style={ImageWrapperStyles}>
        <img  src={images[imgShown]} alt={images[imgShown]}/>
      </div>
      <div style={ImageArrowStyles('right', showRight)} onClick={() => changeImageShown('right')}>
        <RightArrowIcon />
      </div>
    </div>
  )
}