module.exports = {
  extendMarkdown (md) {
    lineNumbers: true
  },
  head: [
    ['script', {src: "https://kit.fontawesome.com/63ee5d57eb.js"}]
  ],
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
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh'
          },
          '/pt/': {
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
        selectText: 'Português',
        label: 'English',
        // editLinkText: 'Edit this page on Github',
        algolia: {},
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Contact', link: '/contact/' }
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
          '/about-me/',
          '/contact/'
        ]
      },
      '/pt/': {
        lang: 'pt-BR',
        selectText: 'English',
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
    }
  }
}
