import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/use-site-metadata";

const Seo = () => {
  const { title, name, content } = useSiteMetadata();
  return (
    <Helmet>
      <html lang="ja" />
      <title>{title} </title>
      <meta title={title} name={name} content={content} />
    </Helmet>
  );
};

export default Seo;
