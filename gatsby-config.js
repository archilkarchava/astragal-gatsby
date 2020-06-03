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
  plugins: [
    // gatsby-plugin-preact breaks hot reloading in development
    ...(process.env.NODE_ENV === `production` ? [`gatsby-plugin-preact`] : []),
    // `gatsby-plugin-preact`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          "src/__generated__/gatsby-schema.graphql": true,
        },
        // Workaround: temporarily disable graphql fragment generation, since it outputs duplicates
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
              family: `Source Sans Pro`,
              subsets: [`latin`, `cyrillic`],
              variants: [`400`, `600`, `700`],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-linaria`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // "gatsby-plugin-webpack-bundle-analyser-v2",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
