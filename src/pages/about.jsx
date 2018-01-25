import React from "react";
import ButtonLink from "../components/ButtonLink";
import Tile from "../components/Tile";
import PageHeader from "../components/PageHeader";

const IndexPage = () => (
  <Tile>
    <PageHeader>Developer, Tech Enthusiast & Entrepreneur</PageHeader>
    {/* TODO: Edit */}
    <p>
      I got my Bachelors in Web & Information Systems at New Jersey Institute of Technology. I am a
      Freelance Software Developer with specialization in JavaScript. I have 3+ years experience
      working at various companies working with various technologies and frameworks. I have a good
      attention to detail and providing a great User Experience is a priority for me on any project.
      Contact me if you have an interesting project you want to talk about.
    </p>
    <ButtonLink to="/contact" title="Let's Talk" />
  </Tile>
);

export default IndexPage;
