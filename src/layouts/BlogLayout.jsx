import React from "react";
import PropTypes from "prop-types";
import DetailPage from "../components/DetailPage";
import "../static/prism.css";

const BlogLayout = ({ data }) => {
  const { html } = data.markdownRemark;
  return <DetailPage html={html} />;
};

BlogLayout.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BlogLayout;

export const query = graphql`
  query BlogPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;
