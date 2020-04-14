import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const RoundedButton = styled(Link)`
  border-radius: 40px;
`;

interface Props {
  to: string;
  type?: "primary" | "secondary" | "tertiarry";
  title: string;
}

const ButtonLink: React.FC<Props> = ({ to, title, type = "primary" }) => (
  <RoundedButton to={to} className={`btn btn-${type}`}>
    {title}
  </RoundedButton>
);

export default ButtonLink;
