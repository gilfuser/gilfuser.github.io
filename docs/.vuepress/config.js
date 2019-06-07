module.exports = {
  title: 'Gil Fuser test',
  description: 'works and processes',
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': { lang: 'en-US' },
    '/pt/': { lang: 'pt-BR' }
  },
  serviceWorker: true,
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'gilfuser/gilfuser.github.io',
    docsDir: 'docs',
    '/': {
      lang: 'en-US',
      title: 'Mixings senses makes sense',
      description: 'works and processes',
      selectText: 'Languages',
      label: 'English',
      editLinkText: 'Edit this page on Github',
      algolia: {},
      nav: [
        { text: 'Home', link: '/' }
        // { text:'GitHub',  link: 'https://github.com/gilfuser/gilfuser.github.io' },
        // { text: 'experiments', link: './experiments/' }
      ],
      sidebar: [
        {
          title: 'portfolio',
          children: [
            '',
            'banda-de-plantas',
            'liebesbrunnen',
            'caixa-automagica-de-musica-sensorial'
          ]
        },
        {
          title: 'experiments',
          children: ['', 'na-pegada-do-saci', 'deslugarejo']
        },
        '/short-bio/'
      ]
    },
    '/pt/': {
      lang: 'pt-BR',
      title: 'Misturar sentidos faz sentido',
      description: 'trabalhos e processos',
      selectText: 'Languages',
      label: 'Português',
      algolia: {},
      nav: [
        { text: 'Casa', link: '/pt/' }
        // { text:'GitHub', link: 'https://github.com/gilfuser/gilfuser.github.io' },
        // { text: 'experimentos', link: '/pt/experimentos/' }
      ],
      sidebar: [
        '/pt/',
        '/pt/portfolio/',
        '/pt/pequena-bio/',
        '/pt/experimentos/'
      ]
    }
  }
}
