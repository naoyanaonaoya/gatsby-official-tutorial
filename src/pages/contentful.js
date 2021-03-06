import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/postLink";
import Seo from "../components/seo";

const Content = ({ data }) => {
  return (
    <Layout>
      <Seo />
      {data.allContentfulBlogPost.edges.map((edge) => (
        <React.Fragment key={edge.node.slug}>
          <PostLink post={edge.node} />
        </React.Fragment>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          title
          image {
            title
            file {
              url
            }
          }
          description {
            description
          }
          slug
          updatedAt(locale: "ja-Jp", formatString: "YYYY年MM月DD日")
          publishedAt(locale: "ja-Jp", formatString: "YYYY年MM月DD日")
          body {
            body
          }
          bodymd {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`;

export default Content;
