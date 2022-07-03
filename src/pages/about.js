import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutPage = () => {
  return (
    <>
      <Layout pageTitle="About page">
        <Seo />
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </>
  );
};

export default AboutPage;
