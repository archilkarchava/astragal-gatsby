require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Астрагал`,
    description: `Онлайн магазин мебели, изготовление мебели на заказ.`,
  },
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
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    // Css block start
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
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
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
