import React from "react";
import { graphql } from "gatsby";
import BlogTile from "../components/BlogTile";
import Layout from "../components/Layout";

export interface Blog {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
      description: string;
    };
    timeToRead: number;
    excerpt: string;
  };
}

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Blog[];
    };
  };
}

const Blog: React.FC<Props> = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <BlogTile key={node.id} blog={node} />
    ))}
  </Layout>
);

export const query = graphql`
  query allBlogs {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
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
