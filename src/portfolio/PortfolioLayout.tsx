import React from "react";
import { graphql } from "gatsby";
import DetailPage from "../components/DetailPage";
import Layout from "../components/Layout";

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
  };
}

const PortfolioLayout: React.FC<Props> = (props) => {
  const { frontmatter, html } = props.data.markdownRemark;

  return (
    <Layout>
      <DetailPage title={frontmatter.title} html={html} />
    </Layout>
  );
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
