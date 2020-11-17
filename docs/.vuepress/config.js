module.exports = {
  title: 'Joson',
  description: `Joson's web`,
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'JosonKing/josonking.github.io',
    repoLabel: 'Github',
    docsRepo: 'vuejs/vuepress',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page'
  }
}