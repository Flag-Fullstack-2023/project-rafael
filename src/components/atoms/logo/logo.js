import React from "react";
import styled from "styled-components";

const LogoContainer = styled.picture`
  width: 20rem;
`;

const LogoEl = styled.img`
  width: 100%;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoEl src="../../logo/logo-full.png" alt="F1-FLAG Logo"></LogoEl>
    </LogoContainer>
  );
};

export default Logo;
