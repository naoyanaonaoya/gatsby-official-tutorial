import React from "react";
import { Link } from "gatsby";
import { postLink, postLinkImage, postLinkAnchor } from "./postLink.module.css";

const PostLink = (props) => {
  const { title, image, slug, publishedAt, body } = props.post;
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
        </div>
      </div>
    </Link>
  );
};

export default PostLink;
