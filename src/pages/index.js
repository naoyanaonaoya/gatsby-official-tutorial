import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <>
      <Layout pageTitle="Home page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          alt="pitbulls"
          // loading="eager"
          placeholder="blurred"
          layout="fixed"
          width={500}
        />
        <StaticImage
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          alt="dog"
          // loading="lazy"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
      </Layout>
    </>
  );
};

export default HomePage;
