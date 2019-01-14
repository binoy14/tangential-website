import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import DetailPage from "../components/DetailPage";
import Layout from "../components/Layout";

const PortfolioLayout = (props) => {
  const { frontmatter, html } = props.data.markdownRemark;

  return (
    <Layout>
      <DetailPage title={frontmatter.title} html={html} />
    </Layout>
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
