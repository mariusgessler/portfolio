require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Marius Gessler',
    description: 'Frontend Developer based in The Netherlands.',
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Karla`,
          `DM Mono\:300,400,`
        ],
      }
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
    {
    resolve: 'gatsby-plugin-netlify',
    options: {
      headers: {
        '/page-data': ['cache-control: public, max-age=0, must-revalidate'],
        '/static/*': ['cache-control: public, max-age=31536000, immutable'],
        '/**/*.html': ['cache-control: public, max-age=0, must-revalidate'],
        '/*.js': ['cache-control: public, max-age=31536000, immutable'],
        '/*.css': ['cache-control: public, max-age=31536000, immutable'],
        '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
      }, 
    },
   },
  ],
};
