import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = (): GatsbyTypes.SiteMetadataQuery["sanitySiteSettings"] => {
  const data = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(graphql`
    query SiteMetadata {
      sanitySiteSettings(_id: { eq: "siteSettings" }) {
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
  `)
  return data.sanitySiteSettings
}

export default useSiteMetadata
