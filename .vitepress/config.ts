import { UserConfig } from "vitepress"
import { headerPlugin } from './headerMdPlugin'
const config: UserConfig = {
    title: "Vue3-About",
    lang: 'en-US',
    base: "/",
    description: 'some awesome project for vue3',
    lastUpdated: true,
    head: [
        ["mata", { "title": "some awesome project for vue3" }]
    ],
    markdown: {
        config(md) {
            md.use(headerPlugin)
        }
    },
    themeConfig: {
        algolia: {
            appId: "SIZT7FHV5R",
            apiKey: '067689c78b64e47c2fe01b253612e710',
            indexName: 'vue3-about'
        },
        nav: [
            {
                text: 'Visit',
                link: '/home/index',
                activeMatch: '^/home/'
            },
            // {
            //     text: 'Other',
            //     link: '/other/basics',
            //     activeMatch: '^/other/'
            // },
            {
                text: 'Github',
                link: 'https://github.com/qiuquanwu/vue3-about'
            }
        ],
        sidebar: {
            '/home/': getSidebar(),
            '/about/': [],
            '/': []
        },
        editLink: {
            repo: 'qiuquanwu/vue3-about',
            text: 'Edit this page on GitHub'
        },

        footer: {
            license: {
                text: 'MIT License',
                link: 'https://opensource.org/licenses/MIT'
            },
            copyright: `Copyright © 2021-${new Date().getFullYear()} qiuquanwu`
        }

    }

}

function getSidebar() {
    return [
        {
            text: 'Vue3-About',
            children: [
                { text: 'What is Vue3-About?', link: '/home/index' },
                { text: 'PR Requirements', link: '/home/pr' },
            ]
        },
        {
            text: 'Official',
            children: [
                { text: 'Official Project', link: '/home/official-project' },
            ]
        },
        {
            text: 'Components',
            children: [
                { text: 'UI Components', link: '/home/ui-components' },
                { text: 'Charts & Map', link: '/home/charts' },
                { text: 'Single Component', link: '/home/single-component' },
            ]
        },
        {
            text: 'Utils',
            link: '/home/hooks',
            children: [
                { text: 'Hooks', link: '/home/hooks' },
            ]
        }
    ]
}


export default config