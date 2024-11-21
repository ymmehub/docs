import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: 'icon/ymme.png' }]],
  title: "YMME Hub",
  description: "GitHub Releasesに戻りたい？",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ホーム', link: '/' }
    ],

    sidebar: [
      {
        text: 'YMME Hub Docs',
        items: [
          { text: 'アップロードガイド', link: '/guide/upload-guide' },
          { text: 'YMME Hubからデータを取得する', link: '/guide/ymmehub-getdata' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ymmehub/ymmehub.github.io' },
      { icon: 'discord', link: 'https://discord.gg/DDDNz5vC9J' }
    ],

    footer: {
      message: 'ページの枠組みには Node.js & Vue.js & VitePress を利用しております。',
      copyright: 'Copyright © 2024 Org YMM(e) Hub'
    }
  },
  base: "/docs/"
})
