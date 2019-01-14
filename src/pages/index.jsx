import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql } from "gatsby";
import ButtonLink from "../components/ButtonLink";
import PortfolioList from "../components/PortfolioList";
import colors from "../colors";
import Layout from "../components/Layout";

const { primaryText } = colors;

const StyledHeader = styled.h2`
  color: ${primaryText};
  font-weight: 100;
`;

const StyledSubtext = styled.p`
  color: ${primaryText};
`;

const IndexPage = (props) => {
  const portfolioItems = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <StyledHeader>Hey, I&apos;m Binoy</StyledHeader>
      <StyledSubtext>JavaScript Developer, React Groupie and GraphQL Enthusiast</StyledSubtext>
      <ButtonLink to="/about" title="About Me" />
      <PortfolioList items={portfolioItems} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default IndexPage;

export const query = graphql`
  query Portfolio {
    allMarkdownRemark(
      sort: { fields: [frontmatter___number], order: ASC }
      filter: { fields: { type: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            number
            description
            imgUrl {
              childImageSharp {
                sizes(maxWidth: 900) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
