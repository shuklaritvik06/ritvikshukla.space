/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Ritvik Shukla',
  author: 'Ritvik Shukla',
  headerTitle: 'RS',
  description:
    'Founder | Builder | Writer',
  language: 'en-us',
  siteUrl: 'https://ritvikshukla.space',
  siteRepo: 'https://github.com/shuklaritvik06/ritvikshukla.space',
  image: '/static/img/avatar.png',
  socialBanner: '/static/img/twitter-card.png',
  email: 'ritvikshukla261@gmail.com',
  github: 'https://github.com/shuklaritvik06',
  twitter: 'https://x.com/systemsmithh',
  linkedin: 'https://www.linkedin.com/in/ritvikshukla',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-803ZZXX54Q',
    },
  },
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: '',
    giscusConfig: {
      repo: '',
      repositoryId: '',
      category: '',
      categoryId: '',
      mapping: '',
      reactions: '',
      metadata: '',
      theme: '',
      darkTheme: '',
      themeURL: '',
    },
    utterancesConfig: {
      repo: '',
      issueTerm: '',
      label: '',
      theme: '',
      darkTheme: '',
    },
    disqus: {
      shortname: '',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata
