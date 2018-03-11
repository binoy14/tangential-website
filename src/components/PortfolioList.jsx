import React from "react";
import PropTypes from "prop-types";
import PortfolioCard from "./PortfolioCard";

const PortfolioItems = props => (
  <div>
    {props.items.map(({ node }) => (
      <PortfolioCard key={node.id} slug={node.fields.slug} {...node.frontmatter} />
    ))}
  </div>
);

PortfolioItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default PortfolioItems;
