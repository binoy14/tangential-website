import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styled from "styled-components";

const RoundedButton = styled(Link)`
  border-radius: 40px;
`;

const ButtonLink = ({ to, title, type }) => (
  <RoundedButton to={to} className={`btn btn-${type}`}>
    {title}
  </RoundedButton>
);

ButtonLink.defaultProps = {
  type: "primary",
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "info", "warning", "danger", "link"]),
};

export default ButtonLink;
