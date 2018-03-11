import React from "react";
import PropTypes from "prop-types";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";
import Link from "gatsby-link";

const CardWrapper = styled(Card)`
  border: 0px;
`;

const PortfolioCard = props => (
  <Link to={props.slug}>
    <CardWrapper>
      <CardImg top width="100%" src={props.imgUrl.childImageSharp.sizes.src} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
      </CardBody>
    </CardWrapper>
  </Link>
);

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imgUrl: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PortfolioCard;
