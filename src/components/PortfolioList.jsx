import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PortfolioCard from "./PortfolioCard";

const Wrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--width, 500px), 1fr));
  grid-gap: 20px;

  @media (max-width: 500px) {
    --width: 350px;
  }
`;

const PortfolioItems = (props) => (
  <Wrapper>
    {props.items.map(({ node }) => (
      <PortfolioCard key={node.id} slug={node.fields.slug} {...node.frontmatter} />
    ))}
  </Wrapper>
);

PortfolioItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default PortfolioItems;
