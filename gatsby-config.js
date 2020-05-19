require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Marius Gessler',
    description: 'A developer looking to work on meaningful projects with some nice people.',
    author: 'Marius Gessler',
    keywords: 'front end developer, web developer, web designer, web development, react developer, vue developer, developer netherlands',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      name: 'data',
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_SPACE_ID,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/background/`,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'portfolio',
        start_url: '/',
        background_color: '#145374',
        theme_color: '#145374',
        display: 'minimal-ui',
        icon: `${__dirname}/src/images/favicon.png`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/index/'],
      },
    },
  ],
};
