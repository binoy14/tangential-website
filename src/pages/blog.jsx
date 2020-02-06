import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import BlogTile from "../components/BlogTile";
import Layout from "../components/Layout";

const Blog = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <BlogTile list key={node.id} blog={node} />
    ))}
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const query = graphql`
  query allBlogs {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
          }
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`;

export default Blog;
