import { useStaticQuery, graphql } from "gatsby";

// https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            name
            content
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
