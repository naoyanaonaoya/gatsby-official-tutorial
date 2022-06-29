module.exports = {
  siteMetadata: {
    title: `gatsby-official-tutorial`,
    siteUrl: "https://gatsbyofficialtutorialmai51639.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
  ],
};
