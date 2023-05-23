import { GalleryEl } from "../../sections/style/gallery.styled";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Gallery = ({ images, name }) => {
  return (
    <GalleryEl>
      <Swiper className="swiper" modules={[Navigation]} navigation loop={true}>
        {images.map((image) => (
          <SwiperSlide className="swiper-slide">
            <img src={image} alt={`${name} photo`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </GalleryEl>
  );
};

export default Gallery;
