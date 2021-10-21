import React from "react";
import styled from "styled-components";
import Tile from "./Tile";
import colors from "../colors";

const { secondaryText } = colors;

const Header = styled.h1`
  color: ${secondaryText};
`;

const Body = styled.div`
  color: ${secondaryText};

  img {
    width: 100%;
  }
`;

interface Props {
  title?: string;
  html: string;
}

const DetailPage: React.FC<Props> = ({ title, html }) => (
  <Tile>
    {title && <Header>{title}</Header>}
    <Body dangerouslySetInnerHTML={{ __html: html }} />
  </Tile>
);

export default DetailPage;
