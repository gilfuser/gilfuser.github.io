module.exports = {
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Gil Fuser',
      description: 'works and processes'
    },
    '/pt/': {
      lang: 'pt-BR',
      title: 'Misturar sentidos faz sentido',
      description: 'trabalhos e processos'
    }
  },
  serviceWorker: true,
  themeConfig: {
    // sidebarDepth: 0,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'gilfuser/gilfuser.github.io',
    // docsDir: 'docs',
    editLinks: false,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'GitHub',
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Mixings senses makes sense',
        description: 'works and processes',
        selectText: 'Languages',
        label: 'English',
        // editLinkText: 'Edit this page on Github',
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
              '/portfolio/campo/',
              '/portfolio/estacao-maritaca/',
              '/portfolio/territorio-vital/',
              '/portfolio/banda-de-plantas/',
              'portfolio/caixa-automagica-de-musica-sensorial/',
              '/portfolio/algorave-sp/',
              '/portfolio/flou/',
              '/portfolio/liebesbrunnen/',
              '/portfolio/margem-abandonada/',
              '/portfolio/zauberspiegel/',
              '/portfolio/reklamiertes-kapital/',
              '/portfolio/nos-outros/',
              '/portfolio/coorpel-stencil-workshop/'
            ]
          },
          {
            title: 'Experiments',
            children: [
              '/experiments/deslugarejo/',
              'experiments/na-pegada-do-saci/',
              '/experiments/curious-singing/'
            ]
          },
          '/about-me/'
        ]
      },
      '/pt/': {
        lang: 'pt-BR',
        selectText: 'Languages',
        label: 'Português',
        algolia: {},
        nav: [
          { text: 'Casa', link: '/pt/' }
          // { text:'GitHub', link: 'https://github.com/gilfuser/gilfuser.github.io' },
          // { text: 'experimentos', link: '/pt/experimentos/' }
        ],
        sidebar: [
          {
            title: 'portfolio',
            children: [
              '/pt/portfolio/estacao-maritaca/',
              '/pt/portfolio/territorio-vital/',
              '/pt/portfolio/banda-de-plantas/'
            ]
          },
          '/pt/experimentos/',
          '/pt/pequena-bio/'
        ]
      }
    },
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    }
  }
}
