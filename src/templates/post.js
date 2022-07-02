import * as React from "react";
import Layout from "../components/layout";
import { postHeader, postDate, postImage, postBody } from "./post.module.css";
import Markdown from "../components/Markdown";

const Post = ({ pageContext }) => {
  const { title, image, body, bodymd, updatedAt, publishedAt, slug } =
    pageContext.post;

  return (
    <>
      <Layout>
        <div className={postHeader}>
          <h1>{title}</h1>
          <p className={postDate}>{updatedAt}</p>
        </div>
        <div>
          <img src={image.file.url} className={postImage} alt="post-cover" />
        </div>
        <Markdown>{bodymd.childMdx.body}</Markdown>
      </Layout>
    </>
  );
};

export default Post;
