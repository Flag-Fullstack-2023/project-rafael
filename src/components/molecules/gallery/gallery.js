import React, { createContext, useState } from "react";
import { GalleryEl } from "./gallery.styled";
import Cell from "../../atoms/gallery-cell/gallery-cell";
import ForwardArrow from "../../atoms/forward-arrow-svg/forward-arrow-svg";
import BackArrow from "../../atoms/back-arrow-svg/back-arrow-svg";
import { dummyArray } from "../../../dummyArray";
import LeftEl from "../../atoms/arrow-previous/arrow-previous";
import RightEl from "../../atoms/arrow-forward/arrow-forward";

export const GalleryContext = createContext();

const Gallery = ({ driver }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <GalleryContext.Provider value={{ currentIndex, setCurrentIndex }}>
      <GalleryEl>
        <LeftEl driver={driver} index={currentIndex}>
          <BackArrow />
        </LeftEl>
        <Cell driver={driver} index={currentIndex}></Cell>
        <RightEl driver={driver} index={currentIndex}>
          <ForwardArrow />
        </RightEl>
      </GalleryEl>
    </GalleryContext.Provider>
  );
};

export default Gallery;
