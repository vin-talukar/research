module.exports = {
  title : 'Quantifying UX',
  description : 'my journey into research',
  themeConfig: {
    algolia: {
      apiKey: '54378ee6a3eef43f34c085a16c3809b4',
      indexName: 'vin-talukar'
    },
    nav:[
      { text: 'Home', link: '/'},
      { text: 'Proposal', link: '/proposal/'},
      { text: 'Literature review', link: '/litreview/'},
      { text: 'Best practices', link: '/bestpractices/'},
      { text: 'My story', link: '/mystory/'}
    ]
  },
  base: '/research/',
  searchMaxSuggestions: 30
}
