// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require('tailwindcss');

module.exports = {
  siteName: 'Gridsome Starter - BLNK',
  siteDescription: 'BLNK is a super basic starter for Gridsome.',
  siteUrl: 'https://gridsome-starter-blnk.netlify.app',
  titleTemplate: '',
  metadata: {
    author: 'Angie Vella',
    twitter: {
      site: '@angiemvella',
      creator: '@angiemvella'
    }
  },

  plugins: [
    // Source Filesystem
    // https://gridsome.org/plugins/@gridsome/source-filesystem
    // yarn add @gridsome/source-filesystem
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/posts/**/*.md',
        typeName: 'Post',
      }
    },

    // Sitemap
    // https://gridsome.org/plugins/@gridsome/plugin-sitemap
    // yarn add @gridsome/plugin-sitemap
    // Exclude legal pages (terms, policies, etc)
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/404']
      }
    }

    // Plausible Analytics
    // https://gridsome.org/plugins/gridsome-plugin-plausible-analytics
    // yarn add gridsome-plugin-plausible-analytics
    // {
    //   use: 'gridsome-plugin-plausible-analytics',
    //   options: {
    //     dataDomain: '',
    //     outboundLinkTracking: true,
    //   }
    // }
  ],

  // Transformer Remark
  // https://gridsome.org/plugins/@gridsome/transformer-remark
  // yarn add @gridsome/transformer-remark
  transformers: {
    remark: {
      // Global Remark Options
    }
  },

  // Templates
  templates: {
    Post: '/posts/:title'
  },

  // Tailwind
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ]
      }
    }
  }
}
