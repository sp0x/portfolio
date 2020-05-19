require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Vasil Vasilev`,
    description: `Portfolio and Blog`,
    author: `@sp0x`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.REPOSITORY,
        accessToken: process.env.API_KEY,
        previews: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./static/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
  ],
}
