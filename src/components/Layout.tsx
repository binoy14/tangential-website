import React, { ReactNode } from "react";
import Helmet from "react-helmet";
import { Container } from "reactstrap";
import styled from "styled-components";
import "../layouts/reset.css";
import "bootstrap/dist/css/bootstrap.css"; // eslint-disable-line
import Header from "./Header";
import Footer from "./Footer";
import "../layouts/layout.css";

const StyledContainer = styled(Container)`
  margin-top: 50px;
  flex: 2;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout: React.FC<Props> = (props) => (
  <MainContainer>
    <Helmet
      title="Binoy Patel"
      meta={[
        { name: "keywords", content: "TypesScript, JavaScript, React, GraphQL, Consulting" },
        { property: "og:site_name", content: "Binoy Patel" },
        { property: "og:title", content: "Binoy Patel" },
        { property: "og:url", content: "https://binoy.io" },
        { property: "og:type", content: "website" },
        { itemProp: "name", content: "Binoy Patel" },
        { itemProp: "url", content: "https://binoy.io" },
        {
          property: "og:description",
          content: "Tangential is a consulting company that helps companies with Web and Mobile Applications.",
        },
        {
          itemProp: "description",
          content: "Tangential is a consulting company that helps companies with Web and Mobile Applications.",
        },
        {
          name: "description",
          content: "Tangential is a consulting company that helps companies with Web and Mobile Applications.",
        },
      ]}
    />
    <Header {...props} />
    <StyledContainer>{props.children}</StyledContainer>
    <Footer />
  </MainContainer>
);

export default Layout;
