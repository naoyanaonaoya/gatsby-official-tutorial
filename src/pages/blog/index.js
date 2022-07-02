import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PostLink from "../../components/postLink";

const BlogPage = ({ data }) => {
  return (
    <>
      <Layout pageTitle="My Blog Posts">
        <SEO />
        <ul>
          {console.log(data.allMdx.nodes)}
          {data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
