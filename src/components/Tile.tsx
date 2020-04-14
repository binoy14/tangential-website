import React, { ReactNode } from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import colors from "../colors";

const { tileColor } = colors;
const StyledDiv = styled(Container)`
  background-color: ${tileColor};
  text-align: left;
  padding: 50px;
  border-radius: 10px;
  margin-bottom: ${(props) => (props.list ? "20px" : "0")};
`;

interface Props {
  children: ReactNode | ReactNode[];
  list?: boolean;
}

const Tile: React.FC<Props> = ({ children, list = false }) => <StyledDiv list={list}>{children}</StyledDiv>;

export default Tile;
