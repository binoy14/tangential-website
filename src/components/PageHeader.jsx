import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../colors";

const { secondaryText } = colors;

export const StyledHeader = styled.h2`
  color: ${secondaryText};
  font-weight: 400;
  margin-bottom: 20px;
`;

const PageHeader = ({ children }) => <StyledHeader>{children}</StyledHeader>;

PageHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PageHeader;
