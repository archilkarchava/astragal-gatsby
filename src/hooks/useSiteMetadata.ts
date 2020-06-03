import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(graphql`
    query SiteMetadata {
      allSanitySiteSettings {
        edges {
          node {
            title
            description
            keywords
            addresses {
              street
              streetNo
              city
              location {
                lat
                lng
                alt
              }
            }
            emails
            phoneNumbers
          }
        }
      }
    }
  `)
  return data.allSanitySiteSettings.edges[0].node
}

export default useSiteMetadata
