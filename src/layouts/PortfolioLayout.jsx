import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tile from "../components/Tile";
import { secondaryText } from "../colors";

const Header = styled.h1`
  color: ${secondaryText};
`;

const Body = styled.div`
  color: ${secondaryText};
`;

const PortfolioLayout = (props) => {
  const { frontmatter, html } = props.data.markdownRemark;

  return (
    <Tile>
      <Header>{frontmatter.title}</Header>
      <Body dangerouslySetInnerHTML={{ __html: html }} />
    </Tile>
  );
};

PortfolioLayout.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PortfolioLayout;

export const query = graphql`
  query PortfolioPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
