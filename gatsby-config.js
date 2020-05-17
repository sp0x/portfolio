require('dotenv').config({
  path: `.env`,
})

console.log(process.env)

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.REPOSITORY,
        accessToken: process.env.API_KEY,
      },
    },
  ],
}
