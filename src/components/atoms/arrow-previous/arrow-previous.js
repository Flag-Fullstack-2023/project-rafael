import React, { useContext } from "react";
import { Container } from "./arrow-previous.styled";
import { GalleryContext } from "../../molecules/gallery/gallery";
import { dummyArray } from "../../../dummyArray";

const LeftEl = ({ children, driver }) => {
  const GalContext = useContext(GalleryContext);

  const onClickHandler = () => {
    const isFirstSlide = GalContext.currentIndex === 0;
    const newIndex = isFirstSlide
      ? dummyArray[driver].images.length - 1
      : GalContext.currentIndex - 1;
    GalContext.setCurrentIndex(newIndex);
  };

  return <Container onClick={onClickHandler}>{children}</Container>;
};

export default LeftEl;
