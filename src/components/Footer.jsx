import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import colors from "../colors";

const { primaryText } = colors;
const FooterContainer = styled.div`
  width: 100%;
  margin: 40px 0;
`;

const StyledText = styled.div`
  color: ${primaryText};
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <StyledText>
        Copyright ©
        {new Date().getFullYear()}
        {" "}
        Tangential LLC
      </StyledText>
    </Container>
  </FooterContainer>
);

export default Footer;
