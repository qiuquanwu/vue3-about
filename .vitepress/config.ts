import fs from "fs";
import path from "path";
import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "@vue/theme";
import baseConfig from "@vue/theme/config";
import { headerPlugin } from "./headerMdPlugin";

const nav = [
    {
        text: "Visit",
        link: "/home/index",
        activeMatch: "^/home/",
    },
    // {
    //     text: 'Other',
    //     link: '/other/basics',
    //     activeMatch: '^/other/'
    // },
    {
        text: "Github",
        link: "https://github.com/qiuquanwu/vue3-about",
    },
];
function getSidebar() {
    return [
        {
            text: "Vue3-About",
            children: [
                { text: "What is Vue3-About?", link: "/home/index" },
                { text: "PR Requirements", link: "/home/pr" },
            ],
        },
        {
            text: "Official",
            children: [{ text: "Official Project", link: "/home/official-project" }],
        },
        {
            text: "Components",
            children: [
                { text: "UI Components", link: "/home/ui-components" },
                { text: "Charts & Map", link: "/home/charts" },
                { text: "Single Component", link: "/home/single-component" },
            ],
        },
        {
            text: "Utils",
            children: [{ text: "Hooks", link: "/home/hooks" }],
        },
    ];
}

export const sidebar = {
    "/home/": getSidebar(),
    "/about/": [],
    "/": [],
};

export default {
    lang: "en-US",
    title: "Vue3-About",
    description: "Vue3-About list some awesome projectes for vue3",
    srcDir: "./",
    srcExclude: ["tutorial/**/description.md"],
    scrollOffset: "header",

    head: [
        ["meta", { name: "twitter:site", content: "@vuejs" }],
        ["meta", { name: "twitter:card", content: "summary" }],
        [
            "meta",
            {
                name: "twitter:image",
                content: "https://vuejs.org/images/logo.png",
            },
        ],
        [
            "link",
            {
                rel: "preconnect",
                href: "https://sponsors.vuejs.org",
            },
        ],
        [
            "script",
            {},
            fs.readFileSync(
                path.resolve(__dirname, "./inlined-scripts/restorePreference.js"),
                "utf-8"
            ),
        ],
        [
            "script",
            {
                src: "https://cdn.usefathom.com/script.js",
                "data-site": "XNOLWPLB",
                "data-spa": "auto",
                defer: "",
            },
        ],
    ],

    themeConfig: {
        nav,
        sidebar,

        algolia: {
            appId: "SIZT7FHV5R",
            apiKey: "067689c78b64e47c2fe01b253612e710",
            indexName: "vue3-about",
        },

        editLink: {
            repo: "qiuquanwu/vue3-about",
            text: "Edit this page on GitHub",
        },

        footer: {
            license: {
                text: "MIT License",
                link: "https://opensource.org/licenses/MIT",
            },
            copyright: `Copyright © 2021-${new Date().getFullYear()} qiuquanwu`,
        },
    },

    // markdown: {
    //     config(md: any) {
    //         md.use(headerPlugin);
    //     },
    // },

    vite: {
        define: {
            __VUE_OPTIONS_API__: false,
        },
        optimizeDeps: {
            include: ["gsap", "dynamics.js"],
            exclude: ["@vue/repl"],
        },
        // @ts-ignore
        ssr: {
            external: ["@vue/repl"],
        },
        server: {
            host: true,
            fs: {
                // for when developing with locally linked theme
                allow: ["../.."],
            },
        },
        build: {
            minify: "terser",
            chunkSizeWarningLimit: Infinity,
        },
        json: {
            stringify: true,
        },
    },

    vue: {
        reactivityTransform: true,
    },
};
