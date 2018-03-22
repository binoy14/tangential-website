import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Container } from "reactstrap";
import styled from "styled-components";
import "./reset.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./layout.css";

const StyledContainer = styled(Container)`
  margin-top: 50px;
  flex: 2;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const TemplateWrapper = props => (
  <MainContainer>
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
  </MainContainer>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
