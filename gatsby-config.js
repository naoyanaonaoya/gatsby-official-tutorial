module.exports = {
  siteMetadata: {
    title: `gatsby-official-tutorial`,
    siteUrl: "https://gatsbyofficialtutorialmai51639.gatsbyjs.io",
    name: "google-site-verification",
    content: "-lDcNDARs_FdlEcqxQHVRabe7E4XCf55T21pQRjwD8c",
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
    "gatsby-plugin-react-helmet",
  ],
};
