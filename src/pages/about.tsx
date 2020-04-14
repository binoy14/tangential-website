import React from "react";
import ButtonLink from "../components/ButtonLink";
import Tile from "../components/Tile";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <Tile>
      <PageHeader>Developer, Tech Enthusiast & Lazy</PageHeader>
      <p>
        I am a Full Stack Developer specializing in building Web and Mobile applications. I have built applications
        using React, React Native, NodeJs, GraphQL and more. I am also an automation enthusiast, I mean if a robot can
        do the task than why not?
      </p>
      <ButtonLink to="/contact" title="Let's Talk" />
    </Tile>
  </Layout>
);

export default IndexPage;
