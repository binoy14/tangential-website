import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "reactstrap";
import colors from "../colors";

const { tileColor } = colors;
const StyledDiv = styled(Container)`
  background-color: ${tileColor};
  text-align: left;
  padding: 50px;
  border-radius: 10px;
  margin-bottom: ${props => (props.list ? "20px" : "0")};
`;

const Tile = ({ children, list }) => (
  <StyledDiv list={list}>{children}</StyledDiv>
);

Tile.propTypes = {
  children: PropTypes.any.isRequired, // eslint-disable-line
  list: PropTypes.bool,
};

Tile.defaultProps = {
  list: false,
};

export default Tile;
