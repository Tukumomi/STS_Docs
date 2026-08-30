// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SecretTalkSystem',
  tagline: '【 声を届ける相手を自由に選べる】内緒話ギミック',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tukumomi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/STS_Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tukumomi', // Usually your GitHub org/user name.
  projectName: 'STS_Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
   [
     '@docusaurus/preset-classic',
     /** @type {import('@docusaurus/preset-classic').Options} */
     ({
       docs: {
         sidebarPath: require.resolve('./sidebars.js'),
         // Please change this to your repo.
         editUrl: 'https://github.com/Tukumomi/STS_Docs',
       },
       gtag: {
         trackingID: 'G-7WDP1YJ08K',
         anonymizeIP: true,
       },
       theme: {
         customCss: require.resolve('./src/css/custom.css'),
       },
       sitemap: {
         changefreq: 'weekly',
         priority: 0.5,
         filename: 'sitemap.xml',
       },
     }),
   ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SecretTalkSystem',
        logo: {
          alt: 'My Site Logo',
          src: 'img/SecretTalkSystem/WebIcon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '説明書',
          },
          {
            href: 'https://momiji-maples.booth.pm/items/8604995',
            label: 'Booth',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '説明書',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'link',
            items: [
              {
                label: 'X(VR関連)',
                href: 'https://x.com/Tukumomi_VR',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
