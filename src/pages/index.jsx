import React from "react";
import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import { primaryText } from "../colors";

const StyledHeader = styled.h2`
  color: ${primaryText};
  font-weight: 100;
`;

const IndexPage = () => (
  <div>
    <StyledHeader>Hey, I'm Binoy</StyledHeader>
    <p>Welcome to your new Gatsby site.</p>
    <ButtonLink to="/page-2" title="Go to page 2" />
  </div>
);

export default IndexPage;
