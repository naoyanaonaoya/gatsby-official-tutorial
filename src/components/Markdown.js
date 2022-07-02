import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import ShortCodes from "./ShortCodes";

const Markdown = ({ children }) => {
  // https://ayumitk.com/ja/blog/mdx-blog-posts-with-contentful/
  return (
    <>
      <MDXProvider components={ShortCodes}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </>
  );
};

export default Markdown;
