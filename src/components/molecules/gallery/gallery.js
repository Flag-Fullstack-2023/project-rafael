import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { GalleryEl } from "./gallery.styled";

const Gallery = ({ images, name }) => {
  return (
    <GalleryEl>
      <Swiper className="swiper" modules={[Navigation]} navigation loop={true}>
        {images.map((image, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <img src={image} alt={`${name}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </GalleryEl>
  );
};

export default Gallery;
