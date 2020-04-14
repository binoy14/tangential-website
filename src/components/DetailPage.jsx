import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tile from "./Tile";
import colors from "../colors";

const { secondaryText } = colors;

const Header = styled.h1`
  color: ${secondaryText};
`;

const Body = styled.div`
  color: ${secondaryText};
`;

const DetailPage = (props) => {
  const { title, html } = props;

  return (
    <Tile>
      {title && <Header>{title}</Header>}
      <Body dangerouslySetInnerHTML={{ __html: html }} />
    </Tile>
  );
};

DetailPage.propTypes = {
  title: PropTypes.string,
  html: PropTypes.string.isRequired,
};

DetailPage.defaultProps = {
  title: "",
};

export default DetailPage;
