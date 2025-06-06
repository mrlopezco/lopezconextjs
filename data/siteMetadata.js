/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Lopez Coll',
  titlePage: 'Lopez Coll',
  author: 'Ignacio Lopez Coll',
  headerTitle: 'Ignacio Lopez Coll',
  description:
    'Ignacio Lopez Colls personal blog, featuring in-depth articles and guides on Microsoft Dynamics 365 Products and ERP Implementations',
  language: 'en-us',
  theme: 'dark',
  siteUrl: process.env.SITE_URL || 'https://ignacio-web.vercel.app',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/thumbnail.png`,
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'ignacio@lopez-coll.com',
  xing: 'https://www.xing.com/profile/JIgnacio_LopezColl',
  linkedin: 'https://www.linkedin.com/in/ignacio-lópez-coll/',
  github: 'https://github.com/mrlopezco',
  x: 'https://twitter.com/x',
  // twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'emailoctopus',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
