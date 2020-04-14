import React from "react";
import styled from "styled-components";
import PortfolioCard from "./PortfolioCard";
import { Node } from "../pages";

const Wrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--width, 500px), 1fr));
  grid-gap: 20px;

  @media (max-width: 500px) {
    --width: 350px;
  }
`;

interface Props {
  items: Node[];
}

const PortfolioItems: React.FC<Props> = (props) => (
  <Wrapper>
    {props.items.map(({ node }) => (
      <PortfolioCard key={node.id} slug={node.fields.slug} {...node.frontmatter} />
    ))}
  </Wrapper>
);

export default PortfolioItems;
