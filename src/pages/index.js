import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const HomePage = () => {
  return (
    <>
      <Layout pageTitle="Home page">
        <Seo />
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          alt="dog"
          // loading="lazy"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <StaticImage
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          alt="pitbulls"
          // loading="eager"
          placeholder="blurred"
          layout="fixed"
          width={500}
        />
      </Layout>
    </>
  );
};

export default HomePage;
