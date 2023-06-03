import styled from "styled-components";

export const GalleryEl = styled.div`
  /* width: 100%; */
  height: 100%;

  .swiper {
    max-width: 700px;
    aspect-ratio: 3/2;
    object-fit: cover;

    &-slide {
      object-fit: cover;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }
    }
  }
`;
