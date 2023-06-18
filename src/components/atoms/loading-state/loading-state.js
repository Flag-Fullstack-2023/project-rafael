import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { IconContainer } from "./loading-state.styled";

const LoadingState = ({ pageType }) => {
  return (
    <IconContainer pageType={pageType}>
      <AiOutlineLoading />
    </IconContainer>
  );
};

export default LoadingState;
