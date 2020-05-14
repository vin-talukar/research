module.exports = {
  title : 'Quantifying Enterprise UX',
  description : 'my journey into research',
  themeConfig: {
    algolia: {
      apiKey: '54378ee6a3eef43f34c085a16c3809b4',
      indexName: 'vin-talukar'
    },
    nav:[
      { text: 'Home', link: '/'},
      { text: 'Proposal', link: '/proposal/'},
      { text: 'Plan', link: '/plan/'},
      { text: 'Literature review', link: '/litreview/'},
      { text: 'Guides', link: '/guides/'},
      { text: 'Raw Notes', link: '/notes/'}
    ]
  },
  base: '/research/',
  searchMaxSuggestions: 30
}
