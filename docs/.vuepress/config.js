module.exports = {
    title: 'Gil Fuser is under construction',
    markdown: {
    lineNumbers: true
    },
    locales: { 
        '/': {lang: 'en-US'},
        '/pt/': {lang: 'pt-BR'}
    },
    serviceWorker: true,
    themeConfig: {

        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'gilfuser/gilfuser.github.io',

        locales: {
            '/': { 
                lang: 'en-US',
                title: 'Gil Fuser is under construction',
                description: 'works and processes',
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on Github',
                algolia: {},
                nav: [
                    { text: 'Home', link: '/' },
                    // { text:'GitHub',  link: 'https://github.com/gilfuser/gilfuser.github.io' },
                    // { text: 'experiments', link: './experiments/' }
                ],
                sidebar: [
                    '/',
                    '/portfolio/',
                    '/short-bio/',
                    '/experiments/'
                ]
            },
            '/pt/': {
                lang: 'pt-BR',
                title: 'Gil Fuser está em construcao',
                description: 'trabalhos e processos',
                selectText: 'Languages',
                label: 'Português',
                algolia: {},
                nav: [
                    { text: 'Casa', link: '/pt/' },
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
}
