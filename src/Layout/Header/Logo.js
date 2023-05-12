import React from "react";
import styled from "styled-components";

const PlaceholderLogo = styled.div`
  width: 10rem;
  height: 1.3rem;
  background-color: ${(props) => props.theme.white};
`;

const Logo = () => {
  return <PlaceholderLogo></PlaceholderLogo>;
};

export default Logo;
