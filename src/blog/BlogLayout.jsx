import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import DetailPage from "../components/DetailPage";
import "../static/prism.css";
import Layout from "../components/Layout";

const BlogLayout = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <DetailPage html={html} title={frontmatter.title} />
    </Layout>
  );
};

BlogLayout.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BlogLayout;

export const query = graphql`
  query BlogPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
