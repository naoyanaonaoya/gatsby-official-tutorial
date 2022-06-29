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
          name
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
        title={data.site.siteMetadata.title}
        name={data.site.siteMetadata.name}
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
