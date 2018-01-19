import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Container } from "reactstrap";
import styled from "styled-components";
import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./layout.css";

const StyledContainer = styled(Container)`
  margin-top: 50px;
`;

const TemplateWrapper = props => (
  <div>
    <Helmet
      title="Tangential"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <Header {...props} />
    <StyledContainer>{props.children()}</StyledContainer>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
