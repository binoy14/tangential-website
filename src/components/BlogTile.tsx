import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Tile from "./Tile";
import colors from "../colors";
import { Blog } from "../pages/blog";

const { secondaryText } = colors;

const Description = styled.p`
  margin-top: 10px;
`;

const Wrapper = styled(Tile)`
  object-fit: contain;
`;

const Title = styled.h3`
  a {
    color: ${secondaryText};
  }
`;

interface Props {
  blog: Blog["node"];
}

const BlogTile: React.FC<Props> = ({ blog }) => (
  <Wrapper list>
    <Title>
      <Link to={blog.fields.slug}>{blog.frontmatter.title}</Link>
    </Title>
    <p>
      {blog.frontmatter.date} · {blog.timeToRead} min read
    </p>
    <Description>{blog.excerpt}</Description>
  </Wrapper>
);

export default BlogTile;
