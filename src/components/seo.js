import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const SEO = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          content
        }
      }
    }
  `);
  console.log(data);
  return (
    <Helmet>
      <html lang="ja" />
      <title>{data.site.siteMetadata.title}</title>
      <meta
        name={data.site.siteMetadata.title}
        content={data.site.siteMetadata.content}
      />
    </Helmet>
  );
};

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         content
//       }
//     }
//   }
// `;

export default SEO;
