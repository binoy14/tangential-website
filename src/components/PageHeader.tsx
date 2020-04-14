import React, { ReactNode } from "react";
import styled from "styled-components";
import colors from "../colors";

const { secondaryText } = colors;

export const StyledHeader = styled.h2`
  color: ${secondaryText};
  font-weight: 400;
  margin-bottom: 20px;
`;

interface Props {
  children: ReactNode | ReactNode[];
}

const PageHeader: React.FC<Props> = ({ children }) => <StyledHeader>{children}</StyledHeader>;

export default PageHeader;
