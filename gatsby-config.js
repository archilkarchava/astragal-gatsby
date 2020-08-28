require("dotenv").config()

const overlayDrafts =
  process.env.OVERLAY_DRAFTS !== null &&
  process.env.OVERLAY_DRAFTS !== undefined
    ? !!Number(process.env.OVERLAY_DRAFTS)
    : process.env.NODE_ENV !== `production`

const watchMode =
  process.env.WATCH_MODE !== null && process.env.WATCH_MODE !== undefined
    ? !!Number(process.env.WATCH_MODE)
    : process.env.NODE_ENV !== `production`

module.exports = {
  siteMetadata: {
    siteUrl: `https://astragal74.ru`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          "src/__generated__/gatsby-schema.graphql": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Playfair Display`,
              subsets: [`cyrillic`],
              variants: [`600`],
            },
            {
              family: `Open Sans`,
              subsets: [`latin`, `cyrillic`],
              variants: [`300`, `400`, `600`, `700`],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_PROJECT_DATASET,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: overlayDrafts,
        watchMode: watchMode,
      },
    },
    `gatsby-source-sanity-transform-images`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Астрагал`,
        short_name: `Астрагал`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //     threshold: 0.05, // Percentage of an element's area that needs to be visible to launch animation
    //     once: true, // Defines if animation needs to be launched once
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
      }`,
        resolveSiteUrl: ({ site }) => {
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) => {
          return allSitePage.nodes.map((node) => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `monthly`,
              priority: 0.7,
            }
          })
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-loadable-components-ssr`,
    `gatsby-plugin-zeit-now`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
