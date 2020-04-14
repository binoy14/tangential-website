import React from "react";
import { graphql } from "gatsby";
import DetailPage from "../components/DetailPage";
import "../static/prism.css";
import Layout from "../components/Layout";

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const BlogLayout: React.FC<Props> = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <DetailPage html={html} title={frontmatter.title} />
    </Layout>
  );
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
