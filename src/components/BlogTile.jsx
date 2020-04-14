import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import Tile from "./Tile";
import colors from "../colors";

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

const BlogTile = ({ blog }) => (
  <Wrapper list key={blog.id}>
    <Title>
      <Link to={blog.fields.slug}>{blog.frontmatter.title}</Link>
    </Title>
    <p>
      {blog.frontmatter.date}
      {" "}
      ·
      {blog.timeToRead}
      {" "}
      min read
    </p>
    <Description>{blog.excerpt}</Description>
  </Wrapper>
);

BlogTile.propTypes = {
  blog: PropTypes.shape({
    uniqueSlug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    virtuals: PropTypes.shape({
      previewImage: PropTypes.shape({
        imageId: PropTypes.string,
      }),
      subtitle: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogTile;
