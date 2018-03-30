import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import PortfolioList from "../components/PortfolioList";
import { primaryText } from "../colors";

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
    <div>
      <StyledHeader>Hey, I&apos;m Binoy</StyledHeader>
      <StyledSubtext>JavaScript Developer, React Groupie and GraphQL Enthusiast</StyledSubtext>
      <ButtonLink to="/about" title="About Me" />
      <PortfolioList items={portfolioItems} />
    </div>
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
