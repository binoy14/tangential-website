import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Container } from "reactstrap";
import styled from "styled-components";
import "./reset.css";
import "bootstrap/dist/css/bootstrap.css"; // eslint-disable-line
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./layout.css";
import favicon from "../static/favicon.ico";

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
      title="Tangential - Binoy Patel"
      meta={[
        { name: "keywords", content: "JavaScript, React, React Native, Consulting" },
        { property: "og:site_name", content: "Tangential - Binoy Patel" },
        { property: "og:title", content: "Tangential - Binoy Patel" },
        { property: "og:url", content: "https://www.binoy.io/" },
        { property: "og:type", content: "website" },
        { itemProp: "name", content: "Tangential - Binoy Patel" },
        { itemProp: "url", content: "https://www.binoy.io/" },
        {
          property: "og:description",
          content:
            "Tangential is a consulting company that helps companies with Web and Mobile Applications.",
        },
        {
          itemProp: "description",
          content:
            "Tangential is a consulting company that helps companies with Web and Mobile Applications.",
        },
        {
          name: "description",
          content:
            "Tangential is a consulting company that helps companies with Web and Mobile Applications.",
        },
      ]}
    >
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <Header {...props} />
    <StyledContainer>{props.children()}</StyledContainer>
    <Footer />
  </MainContainer>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
