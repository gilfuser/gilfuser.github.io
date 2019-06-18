module.exports = {
  extendMarkdown (md) {
    lineNumbers: true
  },
  head: [['script', { src: 'https://kit.fontawesome.com/63ee5d57eb.js' }]],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-12345678-9'
      }
    ],
    {
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          '/en/': {
            message: 'New content is available.',
            buttonText: 'Refresh'
          },
          '/': {
            message: 'novo conteúdo disponível',
            buttonText: 'Recarregar'
          }
        }
      }
    },
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10
      }
    ],
    'container',
    '@vuepress/register-components',
    '@vuepress/active-header-links',
    {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
      headerTopOffset: 120
    },
    '@vuepress/nprogress'
  ],
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'works in digress',
      description: 'works in digress'
    },
    '/': {
      lang: 'pt-BR',
      title: 'trabalhos em digressão',
      description: 'trabalhos em digressão'
    }
  },
  themeConfig: {
    // sidebarDepth: 0,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'gilfuser/gilfuser.github.io',
    // docsDir: 'docs',
    editLinks: false,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'GitHub',
    locales: {
      '/en/': {
        lang: 'en-US',
        title: 'Mixing senses makes sense',
        description: 'works in digression',
        selectText: 'Português',
        label: 'English',
        // editLinkText: 'Edit this page on Github',
        algolia: {},
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Contact', link: '/en/contact/' }
          // { text:'GitHub',  link: 'https://github.com/gilfuser/gilfuser.github.io' },

          // { text: 'experiments', link: './experiments/' }
        ],
        sidebar: [
          {
            title: 'portfolio',
            children: [
              '/en/portfolio/campo/',
              '/en/portfolio/estacao-maritaca/',
              '/en/portfolio/territorio-vital/',
              '/en/portfolio/banda-de-plantas/',
              '/en/portfolio/caixa-automagica-de-musica-sensorial/',
              '/en/portfolio/algorave-sp/',
              '/en/portfolio/flou/',
              '/en/portfolio/liebesbrunnen/',
              '/en/portfolio/margem-abandonada/',
              '/en/portfolio/zauberspiegel/',
              '/en/portfolio/reklamiertes-kapital/',
              '/en/portfolio/nos-outros/',
              '/en/portfolio/coorpel-stencil-workshop/'
            ]
          },
          {
            title: 'Experiments',
            children: [
              '/en/experiments/deslugarejo/',
              '/en/experiments/na-pegada-do-saci/',
              '/en/experiments/curious-singing/'
            ]
          },
          '/en/about-me/',
          '/en/contact/'
        ]
      },
      '/': {
        lang: 'pt-BR',
        selectText: 'English',
        label: 'Português',
        algolia: {},
        nav: [
          { text: 'Casa', link: '/' },
          { text: 'Contato', link: '/contato/' }
          // { text:'GitHub', link: 'https://github.com/gilfuser/gilfuser.github.io' },
          // { text: 'experimentos', link: '/pt/experimentos/' }
        ],
        sidebar: [
          {
            title: 'portfolio',
            children: [
              '/portfolio/campo/',
              '/portfolio/estacao-maritaca/',
              '/portfolio/territorio-vital/',
              '/portfolio/banda-de-plantas/',
              '/portfolio/caixa-automagica-de-musica-sensorial/',
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
            title: 'Experimentos',
            children: [
              '/experimentos/deslugarejo/',
              '/experimentos/na-pegada-do-saci/',
              '/experimentos/curious-singing/'
            ]
          },
          '/sobre-mim/',
          '/contato/'
        ]
      }
    }
  }
}
