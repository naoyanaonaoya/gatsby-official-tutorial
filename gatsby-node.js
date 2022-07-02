const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              image {
                file {
                  url
                }
              }
              body {
                body
              }
              bodymd {
                childMdx {
                  body
                }
              }
              updatedAt(locale: "ja-Jp", formatString: "YYYY年MM月DD日")
              publishedAt(locale: "ja-Jp", formatString: "YYYY年MM月DD日")
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild("Error while runnning GraphQL query.");
  }

  result.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/post/${edge.node.slug}/`,
      component: path.resolve("./src/templates/post.js"),
      context: { post: edge.node },
    });
  });
};
