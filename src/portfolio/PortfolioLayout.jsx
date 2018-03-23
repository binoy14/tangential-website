import React from "react";
import PropTypes from "prop-types";
import DetailPage from "../components/DetailPage";

const PortfolioLayout = (props) => {
  const { frontmatter, html } = props.data.markdownRemark;

  return <DetailPage title={frontmatter.title} html={html} />;
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
