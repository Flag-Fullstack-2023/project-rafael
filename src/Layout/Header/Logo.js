import React from "react";
import styled from "styled-components";

const LogoContainer = styled.picture`
  width: 10rem;
`;

const LogoEl = styled.img`
  width: 100%;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoEl src="../../logo/Logo_Full.png" alt="F1-FLAG Logo"></LogoEl>
    </LogoContainer>
  );
};

export default Logo;
