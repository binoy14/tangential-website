import React from "react";
import PropTypes from "prop-types";
import Tile from "../components/Tile";

const Blog = ({ data }) => (
  <Tile>
    <h2>Blogs on Medium</h2>
    {data.allMediumPost.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          <a target="_blank" href={`https://blog.binoy.io/${node.uniqueSlug}`}>
            {node.title}
          </a>
        </h3>
        <p>{node.createdAt}</p>
        <p>{node.virtuals.subtitle}</p>
      </div>
    ))}
  </Tile>
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
          }
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;

export default Blog;
