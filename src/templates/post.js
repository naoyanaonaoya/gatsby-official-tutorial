import React from "react";
import Layout from "../components/layout";
import Markdown from "../components/markdown";
import Seo from "../components/seo";
import { postHeader, postDate, postImage } from "./post.module.css";

const Post = ({ pageContext }) => {
  const { title, image, bodymd, updatedAt } = pageContext.post;

  return (
    <>
      <Layout>
        <Seo />
        <div className={postHeader}>
          <h1>{title}</h1>
          <p className={postDate}>{updatedAt}</p>
        </div>
        <div>
          <img src={image.file.url} className={postImage} alt="post-cover" />
        </div>
        {/* <Markdown>{bodymd.childMdx.body}</Markdown> */}
      </Layout>
    </>
  );
};

export default Post;
