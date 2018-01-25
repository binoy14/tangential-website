import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "reactstrap";
import { tileColor } from "../colors";

const StyledDiv = styled(Container)`
  background-color: ${tileColor};
  text-align: center;
  padding: 50px;
`;

const Tile = ({ children }) => <StyledDiv>{children}</StyledDiv>;

Tile.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Tile;
