import styled from "styled-components";
import { breakpoints } from "_utils/breakpoints";

export const GalleryEl = styled.div`
  height: 100%;

  .swiper {
    /* max-width: 700px; */
    aspect-ratio: 3/2;
    object-fit: cover;

    &-button-prev {
      margin-left: 10px;
    }

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
  @media ${breakpoints.forBigMobile} {
    height: auto;
  }
`;
