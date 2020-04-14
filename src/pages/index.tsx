import React from "react";
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

export interface Node {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      number: number;
      descrption: string;
      imgUrl: {
        childImageSharp: {
          sizes: {
            src: string;
          };
        };
      };
    };
  };
}

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Node[];
    };
  };
}

const IndexPage: React.FC<Props> = (props) => {
  const portfolioItems = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <StyledHeader>Hey, I&apos;m Binoy</StyledHeader>
      <StyledSubtext>Web Developer, React Groupie and GraphQL Enthusiast</StyledSubtext>
      <ButtonLink to="/about" title="About Me" />
      <PortfolioList items={portfolioItems} />
    </Layout>
  );
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
