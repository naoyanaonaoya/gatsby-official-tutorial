import * as React from "react";
import { Link } from "gatsby";
import {
  postLink,
  postLinkBody,
  postLinkText,
  postLinkData,
  postLinkImage,
  postLinkAnchor,
} from "./PostLink.module.css";

const PostLink = (props) => {
  const {
    title,
    image,
    description,
    slug,
    updatedAt,
    publishedAt,
    body,
    bodymd,
  } = props.post;
  const pageLink = `/post/${slug}`;

  return (
    <Link to={pageLink} className={postLinkAnchor}>
      <div className={postLink}>
        <div>
          <img
            src={image.file.url}
            className={postLinkImage}
            alt="post-cover"
          />
        </div>
        <div className="postLinkText">
          <h2>{title}</h2>
          <p className="postLinkBody">{body.body}</p>
          <p className="postLinkData">{publishedAt}</p>
          {/* <Markdown>{bodymd.childMdx.body}</Markdown> */}
        </div>
      </div>
    </Link>
  );
};

export default PostLink;
