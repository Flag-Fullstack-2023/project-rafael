import React, { useContext } from "react";
import { Container } from "./arrow-forward.styled";
import { GalleryContext } from "../../molecules/gallery/gallery";
import { dummyArray } from "../../../dummyArray";

const RightEl = ({ children, driver }) => {
  const GalContext = useContext(GalleryContext);

  const onClickHandler = () => {
    const isFirstSlide =
      GalContext.currentIndex === dummyArray[driver].images.length - 1;
    const newIndex = isFirstSlide ? 0 : GalContext.currentIndex + 1;
    GalContext.setCurrentIndex(newIndex);
  };
  return <Container onClick={onClickHandler}>{children}</Container>;
};

export default RightEl;
