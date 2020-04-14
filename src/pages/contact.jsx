import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import twitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import youtube from "@fortawesome/fontawesome-free-brands/faYoutube";
import medium from "@fortawesome/fontawesome-free-brands/faMedium";
import email from "@fortawesome/fontawesome-free-solid/faEnvelope";
import github from "@fortawesome/fontawesome-free-brands/faGithub";
import linkedIn from "@fortawesome/fontawesome-free-brands/faLinkedin";
import styled from "styled-components";
import Tile from "../components/Tile";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Contact = () => (
  <Layout>
    <Tile>
      <PageHeader>Say hello!</PageHeader>
      <Wrapper>
        <a href="https://twitter.com/binoyp14" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={twitter} color="#1ea1f2" size="4x" />
        </a>
        <a href="https://www.youtube.com/user/binoypatel14" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={youtube} color="#ff0000" size="4x" />
        </a>
        <a href="mailto:me@binoy.io">
          <FontAwesomeIcon icon={email} color="#ea4335" size="4x" />
        </a>
        <a href="https://github.com/binoy14" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={github} color="#333" size="4x" />
        </a>
        <a href="https://www.linkedin.com/in/binoy-patel-a6427283" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={linkedIn} color="#0077b5" size="4x" />
        </a>
      </Wrapper>
    </Tile>
  </Layout>
);

export default Contact;
