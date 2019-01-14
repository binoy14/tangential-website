import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import BlogTile from "../components/BlogTile";
import Layout from "../components/Layout";

const Blog = ({ data }) => (
  <Layout>
    {data.allMediumPost.edges.map(({ node }) => (
      <BlogTile list key={node.id} blog={node} />
    ))}
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const query = graphql`
  query mediumBlogs {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;

export default Blog;
