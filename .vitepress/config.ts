import { UserConfig } from "vitepress"
const config: UserConfig = {
    title: "Vue3-About",
    lang: 'en-US',
    base:"/",
    description: 'some awesome project for vue3',
    lastUpdated: true,
    head: [
        ["title", { "title": "some awesome project for vue3" }]
    ],
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/home/index',
                activeMatch: '^/home/'
            },
            {
                text: 'Other',
                link: '/other/basics',
                activeMatch: '^/other/'
            },
            {
                text: 'Release Notes',
                link: 'https://github.com/vuejs/vitepress/releases'
            }
        ],
        sidebar: {
            '/home/': getSidebar(),
            '/about/': [],
            '/': []
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
        ]
      }
    ]
  }
  

export default config