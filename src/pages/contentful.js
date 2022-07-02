import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/postLink";
import SEO from "../components/seo";

const Content = ({ data }) => {
  return (
    <Layout>
      <SEO />
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
    allContentfulBlogPost {
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
          body {
            body
          }
        }
      }
    }
  }
`;

export default Content;
