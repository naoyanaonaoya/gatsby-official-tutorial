import * as React from "react";
import {
  postLink,
  postLinkBody,
  postLinkText,
  postLinkData,
  postLinkImage,
} from "./postLink.module.css";

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360";

const PostLink = (props) => {
  const { title, image, description, slug, updatedAt, body } = props.post;
  return (
    <div className={postLink}>
      <div>
        <img src={image.file.url} className={postLinkImage} alt="post-cover" />
      </div>
      <div className="postLinkText">
        <h2>{title}</h2>
        <p className="postLinkBody">{body.body}</p>
        <p className="postLinkData">{updatedAt}</p>
      </div>
      {/* <div>
        <img src={RANDOM_IMG} className={postLinkImage} alt="post-cover" />
      </div>
      <div className={postLinkText}>
        <h2>Gatsbyでブログを作成してみた</h2>
        <p className={postLinkBody}>
          先日、爆速なサイトを作れると噂のReact製フレームワークのGatsbyを学んでみました。
        </p>
        <p className={postLinkData}>2020年5月30日</p>
      </div> */}
    </div>
  );
};

export default PostLink;
