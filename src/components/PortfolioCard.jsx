import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import colors from "../colors";

const { tileColor, secondaryText } = colors;
const CardWrapper = styled.div`
  border-radius: 5px;
  background-color: ${tileColor};
  padding: 20px;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 20px;
  align-items: center;
  color: ${secondaryText};
  min-height: 400px;
  height: 400px;
  box-shadow: 7px 5px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 500px) {
    grid-template-columns: initial;
    grid-template-rows: 2fr 1fr;
    justify-items: center;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PortfolioCard = (props) => (
  <Link to={props.slug}>
    <CardWrapper>
      <CardImg src={props.imgUrl.childImageSharp.sizes.src} />
      <div>
        <h2>{props.title}</h2>
        {props.description && <p>{props.description}</p>}
      </div>
    </CardWrapper>
  </Link>
);

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imgUrl: PropTypes.objectOf(PropTypes.any).isRequired,
  description: PropTypes.string,
};

PortfolioCard.defaultProps = {
  description: "",
};

export default PortfolioCard;
