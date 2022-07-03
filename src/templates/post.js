import React from "react";
import Layout from "../components/layout";
// import Markdown from "../components/markdown";
import Seo from "../components/seo";
import { postHeader, postDate, postImage, postBody } from "./post.module.css";

const Post = ({ pageContext }) => {
  const { title, image, bodymd, updatedAt, body } = pageContext.post;

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
        <div className={postBody}>{body.body}</div>
        {/* <Markdown>{bodymd.childMdx.body}</Markdown> */}
      </Layout>
    </>
  );
};

export default Post;
