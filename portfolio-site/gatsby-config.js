
module.exports = {
  siteMetadata: {
    title: `Marius Gessler`,
    description: `A developer looking to work on meaningful projects with some nice people.`,
    author: `Marius Gessler`,
    keywords: `front end developer, web developer, web designer, web development, react developer, developer netherlands`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xf0u4wogxlsc`,
        accessToken: `k-Qcp96FcmD_asB7owfzcD9he81wgLjIzGq8qgc9V1s`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        start_url: `/`,
        background_color: `#145374`,
        theme_color: `#145374`,
        display: `minimal-ui`,
        icon: `src/images/portrait.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
    resolve: `gatsby-plugin-offline`,
    options: {
        precachePages: [`/index/`, `/work/*`,`/about`],
      },
  },
  ],
}
